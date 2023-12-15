import React, { useState } from 'react'

const AddTag = ({tag, onChange, checked}) => {
    return (
        <>
            <input className='text-[#FEFEDF]' type="radio" name="tag" value={tag} onChange={()=>onChange(tag)}
            checked={checked}/>{tag}
        </>
    )
}

export default AddTag