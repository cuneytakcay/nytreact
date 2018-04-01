import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Subtitle from '../../components/Subtitle'

const NoMatch = () => (
  <Container fluid>
  	<Container>
	    <Row>
	      <Col md='12'>
	        <Subtitle>
	          <h1>404 Page Not Found</h1>
	        </Subtitle>
	      </Col>
	    </Row>
    </Container>
  </Container>
)

export default NoMatch
