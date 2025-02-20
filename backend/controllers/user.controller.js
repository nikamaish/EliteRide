const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");
// validationResults is a function that will check the request for any validation errors
// if there are any errors, it will return an array of errors

module.exports.registerUser = async (req, res, next) => {
  // this is the controller function that will be called when the route is hit
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // It checks for validation errors (e.g., missing fields, incorrect email format).
  // If errors exist, it returns a 400 (Bad Request) response with the error details.

  const { fullname, email, password } = req.body;
  const hashedPassword = await userModel.hashPassword(password);

  const user = await userService.createUser({
    firstName:fullname.firstName,
    lastName:fullname.lastName,
    email,
    password: hashedPassword,
  });
  // Calls the userService.createUser() function to store the user in the database.

  const token = user.generateAuthToken();

  res.status(201).json({ data: { user, token } });

  // Sends back a 201 (Created) response with:
  // The user object (likely excluding the password).
  // An authentication token for future requests.
};
