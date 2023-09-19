const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Aswin@20',
  database: 'bike_service',
});

router.get('/booking', (req, res) => {
    const sql = 'SELECT * FROM bookings';
    
    pool.query(sql, (err, results) => {
      if (err) {
        console.error('Error fetching bookings:', err);
        return res.status(500).json({ error: 'Failed to fetch bookings' });
      }
      return res.status(200).json(results);
    });
  });
  
 
  router.post('/', (req, res) => {
    const { userId, serviceId, bookingDate } = req.body;
    
    const sql = 'INSERT INTO bookings (user_id, service_id, booking_date) VALUES (?, ?, ?)';
    const values = [userId, serviceId, bookingDate];
  
    pool.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error creating booking:', err);
        return res.status(500).json({ error: 'Failed to create booking' });
      }
  
      return res.status(201).json({ message: 'Booking created successfully', bookingId: result.insertId });
    });
  });
  
  
  router.put('/:id', (req, res) => {
    const bookingId = req.params.id;
    const { userId, serviceId, bookingDate } = req.body;
  
  
    const sql = 'UPDATE bookings SET user_id = ?, service_id = ?, booking_date = ? WHERE id = ?';
    const values = [userId, serviceId, bookingDate, bookingId];
  
    pool.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error updating booking:', err);
        return res.status(500).json({ error: 'Failed to update booking' });
      }
  
      return res.status(200).json({ message: 'Booking updated successfully' });
    });
  });
  
  
  router.delete('/:id', (req, res) => {
    const bookingId = req.params.id;
  
    
  
    const sql = 'DELETE FROM bookings WHERE id = ?';
    const values = [bookingId];
  
    pool.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error deleting booking:', err);
        return res.status(500).json({ error: 'Failed to delete booking' });
      }
  
      return res.status(200).json({ message: 'Booking deleted successfully' });
    });
  });
  
  module.exports = router;