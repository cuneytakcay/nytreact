// Require dependencies
const express = require('express')
const articleRoutes = require('./articles')

const router = express.Router()

// Article routes
router.use('/articles', articleRoutes)

module.exports = router