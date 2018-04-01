import axios from 'axios'
const url = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?'
const apiKey = 'b9f91d369ff59547cd47b931d8cbc56b:0:74623931'

export default {
	// Gets last 10 matching articles from NYT API
  getArticles: function(query, beginDate, endDate) {
    return axios.get(`${url}q=${query}&begin_date=${beginDate}0101&end_date=${endDate}0101&api-key=${apiKey}`)
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
