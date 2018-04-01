import React from 'react'
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col,
         Collapse, Navbar, NavbarToggler, NavbarBrand } from 'reactstrap'
import API from '../../utils/API'
import { DeleteBtn, SaveBtn } from '../../components/Button'
import { FormBtn, Input } from '../../components/Form'
import { List, ListItem } from '../../components/List'
import Subtitle from '../../components/Subtitle'
import classnames from 'classnames'

class Articles extends React.Component {
  constructor(props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.toggle = this.toggle.bind(this)
    this.state = {
      articles: [],
      savedArticles: [], 
      topic: '',
      startYear: '',
      endYear: '',
      activeTab: '1',
      collapsed: true,
    }
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    })
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

  formatDate = date => {
    const d = new Date(date)
    return d.toDateString()
  }

  handleFormSubmit = event => {
    event.preventDefault()
    API.getArticles(this.state.topic, this.state.startYear, this.state.endYear)
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
        <Navbar className='banner' color='dark' dark expand='md'>
          <NavbarBrand href='/' className='mr-auto ml-5 pl-4'><h1>NYT Article Search</h1></NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className='toggler' />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav className='ml-auto mr-5 pr-4' navbar>
              <NavItem>
                <NavLink href='/user/'>Log in</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/user/'>Sign up</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Container>
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
            <Container>
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
                      placeholder='Start Year (required)'
                    />
                    <Input
                      value={this.state.endYear}
                      onChange={this.handleInputChange}
                      name='endYear'
                      placeholder='End Year (required)'
                    />
                    <FormBtn
                      disabled={!(this.state.topic)}
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
            </Container>
          </TabPane>
        
          <TabPane tabId='2'>
            <Container>
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
            </Container>
          </TabPane>
        </TabContent>
        </Container>
      </Container>
    )
  }
}

export default Articles
