import React, { useState } from 'react'

const AddTag = ({tag, onChange, checked}) => {


    return (
        <span className='m-2'>
            <input  type="radio" name="tag" value={tag} onChange={()=>onChange(tag)}
            checked={checked}/>
            <span className='text-[#FEFEDF]'>{tag}</span> 
        </span>
    )
}

export default AddTag