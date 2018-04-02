import React from 'react'
import ModalBox from './Modal'

const ModalPicker = (props) => {
  switch(props.modalType) {
    case 'load_articles':
      return <ModalBox title='Articles are loading...' body='Some text' />

    case 'save_articles':
      return <ModalBox title='Saving article...' body='Some text' />

    default:
      return null
  }
}

export default ModalPicker