const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const servicesRouter = require('./routes/services'); 
const authRouter = require('./routes/auth'); 
const mysql = require('mysql')

const app = express();

app.use(cors()); 
app.use(bodyParser.json()); 

app.use('/api/services', servicesRouter); 
app.use('/api/auth', authRouter); 

app.get('/home', (req, res) => {
  res.send('Welcome to the Bike Service Application API!');
});


const PORT = process.env.PORT || 3008; 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
