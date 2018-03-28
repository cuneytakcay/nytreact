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
app.use(bodyParser.urlencoded({ extended: false }))

// Serve static content from public folder 
app.use(express.static('public'))

// Set up morgan logger
app.use(logger('dev'))

// Require and use routing modules
app.use(require('./routes/index.js'))

// Set up mongoDB database
const databaseUri = 'mongodb://localhost/nyt'

if (process.env.MONGODB_URI) {
	mongoose.connect(process.env.MONGODB_URI)
} else {
	mongoose.connect(databaseUri)
}

// Start the server
app.listen(PORT, () => {
	console.log('Server is running on port', PORT)
})