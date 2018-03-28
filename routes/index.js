// Require dependencies
const express = require('express')

const router = express.Router()

// Create get route for '/'
router.get('/', (req, res) => {
	res.send('TEST!')
})

module.exports = router