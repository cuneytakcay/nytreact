import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import Spinner from 'react-md-spinner'

class ModalBox extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      modal: true,
    }
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
    return (
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
        <ModalBody className='text-center'>
          <Spinner size='100' />
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    )
  }
}

export default ModalBox