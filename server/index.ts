import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection configuration
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin', // Updated password
  database: 'logo',
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
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`;

db.query(createTableQuery, (err: Error | null) => {
  if (err) {
    console.error('Error creating table:', err);
    return;
  }
  console.log('Table created or already exists');
});

// Define the handler function
const handleSubmit = (req: express.Request, res: express.Response): void => {
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
};

// Use the handler function
app.post('/api/submit', handleSubmit);

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