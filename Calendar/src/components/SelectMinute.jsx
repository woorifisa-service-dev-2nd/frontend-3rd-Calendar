import React from 'react'

const SelectMinute = ({setMinute}) => {
  return (
    <div>
        <select onChange={(e)=>setMinute(e.target.value)}>
            <option value='00'>00</option>
            <option value='10'>10</option>
            <option value='20'>20</option>
            <option value='30'>30</option>
            <option value='40'>40</option>
            <option value='50'>50</option>
            </select>
    </div>
  )
}

export default SelectMinute