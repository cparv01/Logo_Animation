import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { body, validationResult } from 'express-validator';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Security middleware
app.use(helmet()); // Adds various HTTP headers for security
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://your-production-domain.com' 
    : 'http://localhost:3000',
  methods: ['POST'],
  allowedHeaders: ['Content-Type']
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// File upload configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'uploads'));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: parseInt(process.env.MAX_FILE_SIZE || '5242880'),
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = (process.env.ALLOWED_FILE_TYPES || '').split(',');
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'));
    }
  }
});

app.use(express.json({ limit: '10mb' }));

// MySQL connection configuration
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: true } : false
});

// Connect to MySQL
db.connect((err: Error | null) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Create table if it doesn't exist
const createTableQuery = `
CREATE TABLE IF NOT EXISTS user_submissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  company_name VARCHAR(255) NOT NULL,
  logo_branding_style ENUM('Modern', 'Vintage', 'Other') NOT NULL,
  animation_style ENUM('Basic', 'Professional', 'Premium') NOT NULL,
  project_deadline DATE NOT NULL,
  custom_requirements TEXT NOT NULL,
  budget_range ENUM('Low', 'Medium', 'High') NOT NULL,
  preferred_contact_method ENUM('Email', 'Phone', 'WhatsApp') NOT NULL,
  file_upload VARCHAR(255),
  agree_to_terms BOOLEAN NOT NULL,
  promo_code VARCHAR(50),
  newsletter_subscription BOOLEAN NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_email (email),
  INDEX idx_created_at (created_at)
)
`;

db.query(createTableQuery, (err: Error | null) => {
  if (err) {
    console.error('Error creating table:', err);
    return;
  }
  console.log('Table created or already exists');
});

// Input validation middleware
const validateInput = [
  body('name').trim().isLength({ min: 2, max: 255 }).escape(),
  body('email').isEmail().normalizeEmail(),
  body('phone').matches(/^\+?[\d\s-()]{10,}$/),
  body('company_name').trim().isLength({ min: 2, max: 255 }).escape(),
  body('logo_branding_style').isIn(['Modern', 'Vintage', 'Other']),
  body('animation_style').isIn(['Basic', 'Professional', 'Premium']),
  body('project_deadline').isDate(),
  body('custom_requirements').trim().isLength({ min: 10, max: 1000 }).escape(),
  body('budget_range').isIn(['Low', 'Medium', 'High']),
  body('preferred_contact_method').isIn(['Email', 'Phone', 'WhatsApp']),
  body('agree_to_terms').isBoolean(),
  body('promo_code').optional().trim().isLength({ max: 50 }).escape(),
  body('newsletter_subscription').isBoolean()
];

// Define the handler function
const handleSubmit = async (req: express.Request, res: express.Response): Promise<void> => {
  try {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ 
        error: 'Validation failed',
        details: errors.array()
      });
      return;
    }

    const {
      name,
      email,
      phone,
      company_name,
      logo_branding_style,
      animation_style,
      project_deadline,
      custom_requirements,
      budget_range,
      preferred_contact_method,
      file_upload,
      agree_to_terms,
      promo_code,
      newsletter_subscription,
    } = req.body;

    // Validate all required fields
    if (!name || !email || !phone || !company_name || !logo_branding_style || 
        !animation_style || !project_deadline || !custom_requirements || 
        !budget_range || !preferred_contact_method || !agree_to_terms || 
        !newsletter_subscription) {
      res.status(400).json({ 
        error: 'Missing required fields',
        requiredFields: [
          'name',
          'email',
          'phone',
          'company_name',
          'logo_branding_style',
          'animation_style',
          'project_deadline',
          'custom_requirements',
          'budget_range',
          'preferred_contact_method',
          'agree_to_terms',
          'newsletter_subscription'
        ]
      });
      return;
    }

    // Check for duplicate email submissions within last 24 hours
    const checkDuplicateQuery = `
      SELECT COUNT(*) as count FROM user_submissions 
      WHERE email = ? AND created_at > DATE_SUB(NOW(), INTERVAL 24 HOUR)
    `;
    
    db.query(checkDuplicateQuery, [email], (err: Error | null, results: any) => {
      if (err) {
        console.error('Error checking duplicate:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      
      if (results[0].count > 0) {
        res.status(429).json({ 
          error: 'Too many submissions from this email. Please try again later.' 
        });
        return;
      }

      // Insert new submission
      const query = `
        INSERT INTO user_submissions (
          name, email, phone, company_name, logo_branding_style,
          animation_style, project_deadline, custom_requirements,
          budget_range, preferred_contact_method, file_upload,
          agree_to_terms, promo_code, newsletter_subscription
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      const values = [
        name,
        email,
        phone,
        company_name,
        logo_branding_style,
        animation_style,
        project_deadline,
        custom_requirements,
        budget_range,
        preferred_contact_method,
        file_upload || null,
        agree_to_terms,
        promo_code || null,
        newsletter_subscription,
      ];

      db.query(query, values, (err: Error | null, results: any) => {
        if (err) {
          console.error('Error inserting data:', err);
          res.status(500).json({ error: 'Failed to save submission' });
          return;
        }
        res.status(201).json({ 
          message: 'Submission successful',
          id: results.insertId 
        });
      });
    });
  } catch (error) {
    console.error('Error processing submission:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Use the handler function with validation middleware
app.post('/api/submit', validateInput, handleSubmit);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

// Try different ports if 3001 is in use
const startServer = (port: number) => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(`Port ${port} is in use, trying next port...`);
    startServer(port + 1);
  }
};

const PORT = parseInt(process.env.PORT || '3001', 10);
startServer(PORT); 