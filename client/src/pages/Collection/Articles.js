import React from 'react'
import { Link } from 'react-router-dom'
import API from '../../utils/API'
import DeleteBtn from '../../components/DeleteBtn'
import { FormBtn, Input } from '../../components/Form'
import { Col, Container, Row } from '../../components/Grid'
import { List, ListItem } from '../../components/List'
import Subtitle from '../../components/Subtitle'

class Articles extends React.Component {
  state = {
    articles: [], 
    topic: '',
    startYear: '',
    endYear: ''
  }

  // componentDidMount() {
  //   this.loadArticles()
  // }

  // loadArticles = () => {
  //   API.getArticles()
  //     .then(res =>
  //       this.setState({ 
  //         articles: res.data, 
  //         topic: '', 
  //         startYear: '', 
  //         endYear: '' })
  //     )
  //     .catch(err => console.log(err))
  // }

  // removeArticle = id => {
  //   API.removeArticle(id)
  //     .then(res => this.loadArticles())
  //     .catch(err => console.log(err))
  // }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    API.getArticles(this.state.topic)
      .then(res => {
        this.setState({
          articles: res.data,
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
                {this.state.articles.data.response.docs.map(article => (
                  <ListItem key={article._id}>
                    <Link to={'/articles/' + article._id}>
                      <strong>
                        {article.headline}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
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
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Articles
