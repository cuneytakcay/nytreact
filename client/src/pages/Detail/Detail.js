import React from 'react'
import { Link } from 'react-router-dom'
import API from '../../utils/API'
import { Col, Container, Row } from '../../components/Grid'
import Subtitle from '../../components/Subtitle'

class Detail extends React.Component {
  state = {
    article: {}
  }

  componentDidMount() {
    API.getArticle(this.props.match.params.id)
      .then(res => this.setState({ article: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size='md-12'>
            <Subtitle>
              <h2>
                {this.state.article.title}
              </h2>
              <p>{this.state.article.link}</p>
              <p>{this.state.article.date}</p>
            </Subtitle>
          </Col>
        </Row>
        <Row>
          <Col size='md-2'>
            <Link to='/'>← Back to Articles</Link>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Detail
