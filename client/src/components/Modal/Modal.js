import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

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
      <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader className={this.props.headerStyle} toggle={this.toggle}>
          {this.props.title}
        </ModalHeader>
        <ModalBody className={this.props.bodyStyle}>
          {this.props.body}
        </ModalBody>
        <ModalFooter className={this.props.footerStyle}>
          {this.props.footer}
        </ModalFooter>
      </Modal>
    )
  }
}

export default ModalBox