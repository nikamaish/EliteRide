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
    },
    socketId:{
        type: String,
    }
});
