// Require dependencies
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Create a new UserSchema object
var UserSchema = new Schema({
  // `username` must be of type String and a required field
  username: {
    type: String,
    required: "Username is Required"
  },
  // `password` must be of type String and a required field
  // uses a custom validation function to only accept values 6 characters or more
  password: {
    type: String,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should be at least 6 characters."
    ]
  },
  // `email` must be of type String and unique
  // must match the regex pattern
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  // `createdAt` must be of type Date. The default value is the current date
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create User model using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;
