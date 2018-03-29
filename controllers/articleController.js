// Require dependencies
const db = require('../models')

// Define methods
module.exports = {
	findAll: function(req, res) {
		db.Article
			.find()
			.sort({ date: -1 })
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err))
	},
  create: function(req, res) {
    db.Article
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
}
