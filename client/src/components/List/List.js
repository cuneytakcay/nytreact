import React from 'react'
import { ListGroup } from 'reactstrap'

export const List = ({ children }) => (
	<div style={{ 'overflowX': 'hidden', 'overflowY': 'scroll', 'maxHeight': 500 }}>
  	<ListGroup>{children}</ListGroup>
  </div>
)

