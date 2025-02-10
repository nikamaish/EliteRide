const  mongoose = require('mongoose');
require('dotenv').config();

function connectToDb(){
    mongoose.connect(process.env.DB_URL,
    {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
       console.log('Connected to DB');     
    }).catch(err=> console.log(err));
    }
    // what we have done here is to create a function that connects to the database using the mongoose.connect() method.
    // why we are using newUrlParser and useUnifiedTopology is because they are required to avoid deprecation warnings. Deprecation warnings are warnings that are given by the mongoose package to inform you that a particular feature you are using is no longer supported and will be removed in future versions of the package.
    // we have also used the .then() and .catch() methods to handle the promise returned by the mongoose.connect() method.
    

module.exports = connectToDb;