// Require dependencies
const express = require('express')
const articleRoutes = require('./articles')
const collectionRoutes = require('./collection')

const router = express.Router()

// Article routes
router.use('/articles', articleRoutes)

// Collection routes
router.use('/collection', collectionRoutes)

module.exports = router