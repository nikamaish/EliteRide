const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
// fullname is object
    fullName:{
        firstName:{
            type: String,
            required: true,
            minLength: [3, 'First name must be at least 3 characters long'],
        },
        lastName:{
            type: String,
            minLength: [3, 'Last name must be at least 3 characters long'],
        },
    },
    email:{
        type: String,
        required: true,
        unique: true,
        minLength: [5, 'Email must be at least 3 characters long'],
    },
    password:{
        type: String,
        required: true,
        select:false,
    },
    socketId:{
        type: String,
    }
});


userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}


userSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this.password);
}



// The purpose of the generateAuthToken method in the userSchema is to create a JSON Web Token (JWT) for a user. This token can be used for authentication purposes, allowing the user to securely access protected resources or endpoints in your application.
// userSchema.methods.generateAuthToken defines an instance method for the user schema. This means that every user document created from this schema will have access to this method.
// jwt.sign({_id: this._id}, process.env.JWT_SECRET) creates a JWT.
// The payload of the token includes the user's _id ({_id: this._id}), which uniquely identifies the user.
// process.env.JWT_SECRET is a secret key used to sign the token, ensuring its integrity and authenticity. This secret should be stored securely in your environment variables.
// Return Token: The generated token is returned by the method.

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET);
    return token;
}


const userModel  = mongoose.model('User', userSchema);
// We create the User model using mongoose.model('User', userSchema), which allows us to interact with the database.

// Controllers handle HTTP requests and use these model methods instead of implementing the logic themselves.