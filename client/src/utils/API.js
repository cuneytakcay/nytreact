import axios from 'axios'
const url = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q='
const apiKey = '&api-key=ba44e7bc259943cb93ae5943f60d08fd'

export default {
  getArticles: function(query) {
    return axios.get(url + query + apiKey)
  }
}
