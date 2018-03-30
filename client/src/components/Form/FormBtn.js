import React from 'react'
import { Button } from 'reactstrap'

export const FormBtn = props => (
  <Button {...props} color='primary' block>
    {props.children}
  </Button>
)
