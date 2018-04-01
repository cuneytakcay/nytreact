import React from 'react'
import { Button } from 'reactstrap'
import './Form.css'

export const FormBtn = props => (
  <Button {...props} color='primary' block>
    {props.children}
  </Button>
)
