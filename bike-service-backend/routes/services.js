const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(cors());

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Aswin@20',
  database: 'bike_service',
  connectionLimit: 10, 
});

router.get('/', (req, res) => {
    const sql = 'SELECT * FROM services';
    
    pool.query(sql, (err, results) => {
      if (err) {
        console.error('Error fetching services:', err);
        return res.status(500).json({ error: 'Failed to fetch services' });
      }
      return res.status(200).json(results);
    });
  });
  
  router.post('/', (req, res) => {
    const { name, description, price } = req.body;

  
    const sql = 'INSERT INTO services (name, description, price) VALUES (?, ?, ?)';
    const values = [name, description, price];
  
    pool.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error creating service:', err);
        return res.status(500).json({ error: 'Failed to create service' });
      }
  
      return res.status(201).json({ message: 'Service created successfully', serviceId: result.insertId });
    });
  });

  router.put('/:id', (req, res) => {
    const serviceId = req.params.id;
    const { name, description, price } = req.body;
  
  
    const sql = 'UPDATE services SET name = ?, description = ?, price = ? WHERE id = ?';
    const values = [name, description, price, serviceId];
  
    pool.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error updating service:', err);
        return res.status(500).json({ error: 'Failed to update service' });
      }
  
      return res.status(200).json({ message: 'Service updated successfully' });
    });
  });

  router.delete('/:id', (req, res) => {
    const serviceId = req.params.id;

  
    const sql = 'DELETE FROM services WHERE id = ?';
    const values = [serviceId];
  
    pool.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error deleting service:', err);
        return res.status(500).json({ error: 'Failed to delete service' });
      }
  
      return res.status(200).json({ message: 'Service deleted successfully' });
    });
  });
  
  module.exports = router;