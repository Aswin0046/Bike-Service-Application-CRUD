const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
const port = process.env.PORT || 3000;


const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Aswin@20',
  database: 'bike_service',
  connectionLimit: 10, 
});

router.post('/register', async (req, res) => {
  const { email, mobileNumber, password } = req.body;



  try {
  
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = 'INSERT INTO users (email, mobile_number, password) VALUES (?, ?, ?)';
    const values = [email, mobileNumber, hashedPassword];

    pool.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error during user registration:', err);
        return res.status(500).json({ error: 'Registration failed' });
      }

      return res.status(201).json({ message: 'Registration successful' });
    });
  } catch (error) {
    console.error('Error hashing password:', error);
    return res.status(500).json({ error: 'Registration failed' });
  }
});


router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const sql = 'SELECT * FROM users WHERE email = ?';
  const values = [email];

  pool.query(sql, values, async (err, results) => {
    if (err) {
      console.error('Error during login:', err);
      return res.status(500).json({ error: 'Login failed' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = results[0];

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, jwtSecretKey);

    return res.status(200).json({ token });
  });
});

module.exports = router;