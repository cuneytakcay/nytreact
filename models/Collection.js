// Require dependencies
const mongoose = require('mongoose')

// Save a reference to the Schema constructor
const Schema = mongoose.Schema

// Create a new UserSchema object
const CollectionSchema = new Schema({
  // 'title' must be unique and of type String
  title: {
    type: String,
    unique: true,
  },
  // 'link' must be unique and of type String
  link: {
    type: String,
    unique: true,
  },
  // 'link' must be of type String
  date: {
    type: String,
  },
})

// Create Collection model using the schema and mongoose's model method
const Collection = mongoose.model('Collection', CollectionSchema)

// Export the Collection model
module.exports = Collection