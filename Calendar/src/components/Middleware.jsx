import React from 'react'
import Modal from './Modal'

const Middleware = ({onClose, plans, onButton, date}) => {

    const filterSelected = plans.data.find(plan => plan.date.getDate() === date.getDate());
    

  return (
    <div>
        <Modal onClose={onClose} plan={filterSelected} onButton={onButton} date={date}></Modal>
    </div>
  )
}

export default Middleware