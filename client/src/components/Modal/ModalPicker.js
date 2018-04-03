import React from 'react'
import Spinner from 'react-md-spinner'
import ModalBox from './Modal'

const ModalPicker = (props) => {
  switch(props.modalType) {
    case 'load_articles':
      return <ModalBox 
      					title='Loading articles...' 
                body={<Spinner size='100' singleColor='red' className='mt-5 mb-5' />} 
                footer='Thanks for your patience.' 
                headerStyle='text-primary'
                bodyStyle='text-center'
            	/>

    case 'save_articles':
      return <ModalBox 
      					title='Saving article...' 
      					body={<Spinner size='100' singleColor='red' className='mt-5 mb-5' />}
      					footer='Thanks for your patience.'
      					headerStyle='text-success'
      					bodyStyle='text-center' 
      				/>

    case 'delete_articles':
      return <ModalBox 
      					body='Article has been removed'
                bodyStyle='pt-5 pb-5 text-center'
      				/>

    default:
      return null
  }
}

export default ModalPicker