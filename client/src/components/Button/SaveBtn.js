import React from 'react'
import { Button } from 'reactstrap'
import './Button.css'

export const SaveBtn = props => (
  <Button size='sm' color='success' {...props}>
    Save Article
  </Button>
)