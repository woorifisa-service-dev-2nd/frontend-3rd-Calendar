import React from 'react'
import Modal from './Modal'

const Middleware = ({onClose, plans, onButton, date, tags, onAddTag}) => {

    const filterSelected = plans.data.find(plan => plan.date.getDate() === date.getDate());
    

  return (
    <div>
        <Modal onClose={onClose} plan={filterSelected} onButton={onButton} date={date} tags={tags} onAddTag={onAddTag}></Modal>
    </div>
  )
}

export default Middleware