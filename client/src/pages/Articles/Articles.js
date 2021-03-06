import React from 'react'
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap'
import API from '../../utils/API'
import { DeleteBtn, SaveBtn } from '../../components/Button'
import { FormBtn, Input } from '../../components/Form'
import { List, ListItem } from '../../components/List'
import Subtitle from '../../components/Subtitle'
import ModalPicker from '../../components/Modal'
import classnames from 'classnames'

class Articles extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      articles: [],
      savedArticles: [], 
      topic: '',
      startYear: '',
      endYear: '',
      activeTab: '1',
      searchModal: false,
      saveModal: false,
      deleteModal: false,
    }
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
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

  showModal = () => {
    this.setState({ 
      saveModal: false,
      deleteModal: false,
    })
  }

  saveArticle = article => {
    API.saveArticle({
      title: article.headline.main,
      link: article.web_url,
      date: article.pub_date,
    })
      .then(res => {
        this.setState({ saveModal: true })
        setTimeout(this.showModal, 3000)
        this.loadSavedArticles()
      })
      .catch(err => console.log(err))
  }

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => {
        this.setState({ deleteModal: true })
        setTimeout(this.showModal, 3000)
      })
      .then(res => this.loadSavedArticles())
      .catch(err => console.log(err))
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  formatDate = date => {
    const d = new Date(date)
    return d.toDateString()
  }

  listArticles = () => {
    API.getArticles(this.state.topic, this.state.startYear, this.state.endYear)
    .then(res => {
      this.setState({
        articles: res.data.response.docs,
        topic: '',
        startYear: '',
        endYear: '',
        searchModal: false,
      })
    })
    .catch(err => console.log(err))
  }

  handleFormSubmit = event => {
    event.preventDefault()
    this.setState({ searchModal: true })
    setTimeout(this.listArticles, 3000)
  }

  render() {
    const modal = () => {
      if (this.state.searchModal) return <ModalPicker modalType='load_articles' />
      if (this.state.saveModal) return <ModalPicker modalType='save_articles' />
      if (this.state.deleteModal) return <ModalPicker modalType='delete_articles' />
    }
    
    return (
      <Container>
        {modal()}
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Search Article
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Your Saved Articles
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId='1'>  
            <Row>
              <Col md='6' sm='12'>
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
                    placeholder='From yyyy (required)'
                  />
                  <Input
                    value={this.state.endYear}
                    onChange={this.handleInputChange}
                    name='endYear'
                    placeholder='To yyyy (required)'
                  />
                  <FormBtn
                    disabled={!(this.state.topic) || !(this.state.endYear) || !(this.state.startYear)}
                    onClick={this.handleFormSubmit}
                  >
                    Search
                  </FormBtn>
                </form>
              </Col>
              <Col md='6' sm='12'>
                <Subtitle>
                  <h2>Article Results</h2>
                </Subtitle>
                {this.state.articles.length ? (
                    <List>
                      {this.state.articles.map(article => (
                        <ListItem key={article._id}>
                          <h4>{article.headline.main}</h4>
                          <a href={article.web_url} target='_blank'>
                            {article.web_url}
                          </a>
                          <p>{this.formatDate(article.pub_date)}</p>
                          <SaveBtn onClick={() => this.saveArticle(article)} />
                        </ListItem>
                      ))}
                    </List>
                  ) : (
                    <p>Please fill out the form and press "Search" to display articles.</p>
                  )}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId='2'> 
            <Row>
              <Col md='12' sm='12'>
                <Subtitle>
                  <h2>Saved Articles</h2>
                </Subtitle>
                {this.state.savedArticles.length ? (
                  <List>
                    {this.state.savedArticles.map(article => (
                      <ListItem key={article._id}>
                        <h4>{article.title}</h4>
                        <a href={article.link} target='_blank'>
                          {article.link}
                        </a>
                        <p>{this.formatDate(article.date)}</p>
                        <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <p>There aren't any articles saved in your list.</p>
                )}
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </Container>
    )
  }
}

export default Articles
