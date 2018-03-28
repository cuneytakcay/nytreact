// Require dependencies
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// Set up express app and port
// Port 3000 is reserved for React app
const app = express()
const PORT = process.env.PORT || '3001'

// Parse application
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Serve static content
app.use(express.static('client/build'))

// Set up morgan logger
app.use(logger('dev'))

// Require and use routing modules
app.use(require('./routes'))

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nyt");

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})