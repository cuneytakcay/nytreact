// Require dependencies
const express = require('express')
const articlesController = require('../../controllers/articleController')

const router = express.Router()

// If rout is '/api/articles'
router.route('/')
	.get(articlesController.findAll)
  .post(articlesController.create)

module.exports = router