import React from 'react'

const ModalForm = ({children}) => {
    return (
        <div>
            <p>{getDate()}</p>
            <input type='text'>일정</input>
        </div>
    )
}

export default ModalForm