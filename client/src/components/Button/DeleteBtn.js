import React from 'react'
import { Button } from 'reactstrap'
import './Button.css'

export const DeleteBtn = props => (
  <Button size='sm' color='danger' {...props}>
    Remove Article
  </Button>
)

