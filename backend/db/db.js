const  mongoose = require('mongoose');
require('dotenv').config();

function connectToDb(){
    mongoose.connect(process.env.DB_URL,
    {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
       console.log('Connected to DB');     
    }).catch(err=> console.log(err));
    }
    // what we have done here is to create a function that connects to the database using the mongoose.connect() method.
    // what is useNewUrlParser and useUnifiedTopology in the connect method? it is a way to avoid deprecation warnings in the console and to ensure that the connection to the database is successful.
    // we have also used the .then() and .catch() methods to handle the promise returned by the mongoose.connect() method.
    

module.exports = connectToDb;