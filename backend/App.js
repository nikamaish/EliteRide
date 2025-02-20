require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const app = express();
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');


connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// what is the difference between express.json() and bodyparser.json()? express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in your application using the code: app. use(express. json());. body-parser is a separate library that has to be installed separately.
// and express.urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays. This method is called as a middleware in your application using the code: app. use(express. urlencoded());

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.use('/users',userRoutes);



module.exports = app;    
