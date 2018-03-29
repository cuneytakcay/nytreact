import axios from 'axios'
const url = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q='
const apiKey = '&api-key=ba44e7bc259943cb93ae5943f60d08fd'

export default {
	// Gets last 10 matching articles from NYT API
  getArticles: function(query) {
    return axios.get(url + query + apiKey)
  }, 
  // Gets all saved articles from MongoDB database nyt
  getSavedArticles: function() {
    return axios.get('/api/articles')
  },
  // Saves the selected article to MongoDB database nyt 
  saveArticle: function(articleData) {
  	return axios.post('/api/articles', articleData)
  },
  deleteArticle: function(id) {
    return axios.delete('/api/articles/' + id)
  },
}
