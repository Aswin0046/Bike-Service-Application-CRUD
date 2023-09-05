const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const servicesRouter = require('./routes/services'); 
const authRouter = require('./routes/auth'); 

const app = express();

app.use(cors()); 
app.use(bodyParser.json()); 

app.use('/api/services', servicesRouter); 
app.use('/api/auth', authRouter); 

app.get('/', (req, res) => {
  res.send('Welcome to the Bike Service Application API!');
});


const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
