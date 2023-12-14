import React, { useState } from 'react'

const AddTag = ({tag}) => {

    return (
        <>
            <input type="radio" name="tag" value={tag} />{tag}
        </>
    )
}

export default AddTag