import React from 'react'
import { Link } from 'react-router-dom'
import API from '../../utils/API'
import { DeleteBtn, SaveBtn } from '../../components/Button'
import { FormBtn, Input } from '../../components/Form'
import { Col, Container, Row } from '../../components/Grid'
import { List, ListItem } from '../../components/List'
import Subtitle from '../../components/Subtitle'

class Articles extends React.Component {
  state = {
    articles: [],
    savedArticles: [], 
    topic: '',
    startYear: '',
    endYear: '',
  }

  componentDidMount() {
    this.loadSavedArticles()
  }

  loadSavedArticles = () => {
    API.getSavedArticles()
      .then(res => this.setState({
        savedArticles: res.data,
      }))
      .catch(err => console.log(err))
  }

  saveArticle = article => {
    console.log(article)
    API.saveArticle({
      title: article.headline.main,
      link: article.web_url,
      date: article.pub_date,
    })
      .then(res => this.loadSavedArticles())
      .catch(err => console.log(err))
  }

  deleteArticle = id => {
    console.log(`Article with id ${id} will be deleted`)
    API.deleteArticle(id)
      .then(res => this.loadSavedArticles())
      .catch(err => console.log(err))
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    API.getArticles(this.state.topic)
      .then(res => {
        this.setState({
          articles: res.data.response.docs,
          topic: '',
          startYear: '',
          endYear: '',
        })
        console.log(this.state.articles)
        console.log(this.state.articles.length)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size='md-4 sm-12'>
            <Subtitle>
              <h2>Search Articles</h2>
            </Subtitle>
            <form>
              <Input
                value={this.state.topic}
                onChange={this.handleInputChange}
                name='topic'
                placeholder='Topic (required)'
              />
              <Input
                value={this.state.startYear}
                onChange={this.handleInputChange}
                name='startYear'
                placeholder='Start Year (Optional)'
              />
              <Input
                value={this.state.endYear}
                onChange={this.handleInputChange}
                name='endYear'
                placeholder='End Year (Optional)'
              />
              <FormBtn
                disabled={!(this.state.topic)}
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
          </Col>
          <Col size='md-4 sm-12'>
            <Subtitle>
              <h2>Article Results</h2>
            </Subtitle>
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => (
                  <ListItem key={article._id}>
                    <h4>{article.headline.main}</h4>
                    <a href={article.web_url}>
                      {article.web_url}
                    </a>
                    <p>{article.pub_date}</p>
                    <SaveBtn onClick={() => this.saveArticle(article)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size='md-4 sm-12'>
            <Subtitle>
              <h2>Saved Articles</h2>
            </Subtitle>
            {this.state.savedArticles.length ? (
              <List>
                {this.state.savedArticles.map(article => (
                  <ListItem key={article._id}>
                    <h4>{article.title}</h4>
                    <a href={article.link}>
                      {article.link}
                    </a>
                    <p>{article.date}</p>
                    <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No saved articles to display</h3>
            )}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Articles
