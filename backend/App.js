require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const app = express();
const connectToDb = require('./db/db');


connectToDb();


app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello World!');
});

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
//     });



module.exports = app;    
