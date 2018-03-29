import React from 'react'
import { Col, Container, Row } from '../../components/Grid'
import Subtitle from '../../components/Subtitle'

const NoMatch = () => (
  <Container fluid>
    <Row>
      <Col size='md-12'>
        <Subtitle>
          <h1>404 Page Not Found</h1>
        </Subtitle>
      </Col>
    </Row>
  </Container>
)

export default NoMatch
