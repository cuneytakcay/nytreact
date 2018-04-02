import React from 'react'
import ModalBox from './Modal'

const ModalPicker = (props) => {
  switch(props.modalType) {
    case 'load_articles':
      return <ModalBox title='Loading articles...' footer='Thanks for your patience.' />

    case 'save_articles':
      return <ModalBox title='Saving article...' footer='Thanks for your patience.' />

    case 'delete_article':
      return <ModalBox title='Deleting article...' footer='Thanks for your patience.' />

    default:
      return null
  }
}

export default ModalPicker