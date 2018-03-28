import axios from 'axios'
const url = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q='
const apiKey = '&api-key=9d4a8986921972b65754ea0809d47c84%3A12%3A74623931'
const query = {}

export default {
  search: function(query) {
    return axios.get(url + query + apiKey)
  }
}
