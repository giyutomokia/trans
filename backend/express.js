const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Database configuration
const dbConfig = {
  host: '127.0.0.1',
  user: 'root',
  password: 'lasya', // Update with your MySQL password
  database: 'snippet_app'
};

// Create a MySQL connection pool
const pool = mysql.createPool(dbConfig);

// Routes
app.post('/submit', async (req, res) => {
  try {
    const { username, language, stdin, code } = req.body;
    const timestamp = new Date().toISOString().slice(0, 19).replace('T', ' '); // Format: 'YYYY-MM-DD HH:mm:ss'
    
    // Insert data into MySQL table
    const connection = await pool.getConnection();
    await connection.query(
      'INSERT INTO snippets (username, language, stdin, code, timestamp) VALUES (?, ?, ?, ?, ?)',
      [username, language, stdin, code, timestamp]
    );
    connection.release();

    res.status(201).send('Snippet submitted successfully');
  } catch (error) {
    console.error('Error submitting snippet:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/snippets', async (req, res) => {
  try {
    // Retrieve snippets from MySQL table
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT username, language, stdin, code, timestamp FROM snippets');
    connection.release();

    res.json(rows);
  } catch (error) {
    console.error('Error fetching snippets:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
