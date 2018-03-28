// Require dependencies
const mongoose = require('mongoose')

// Save a reference to the Schema constructor
const Schema = mongoose.Schema

// Create a new UserSchema object
const UserSchema = new Schema({
  // `username` must be of type String and a required field
  username: {
    type: String,
    required: 'Username is Required',
  },
  // `password` must be of type String and a required field requires 6 characters or more
  password: {
    type: String,
    required: 'Password is Required',
    validate: [
      function(input) {
        return input.length >= 6
      },
      'Password should be at least 6 characters.',
    ],
  },
  // `createdAt` must be of type Date. The default value is the current date
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

// Create User model using mongoose's model method
const User = mongoose.model('User', UserSchema)

// Export the User model
module.exports = User
