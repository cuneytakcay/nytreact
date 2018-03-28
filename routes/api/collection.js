// Require dependencies
const express = require('express')
const collectionController = require('../../controllers/collectionController')

const router = express.Router()

// If rout is '/api/collection'
router.route('/')
  .get(collectionController.findAll)
  .post(collectionController.create)

// If rout is '/api/collection/:id'
router.route('/:id')
  .get(collectionController.findById)
  .put(collectionController.update)
  .delete(collectionController.remove)

module.exports = router