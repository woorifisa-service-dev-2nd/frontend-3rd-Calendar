import React from 'react'

const SelectMinute = ({setMinute, minute}) => {
  return (
    <div>
        <select onChange={(e)=>setMinute(e.target.value)} value={minute}>
            <option defaultValue='00'>00</option>
            <option defaultValue='10'>10</option>
            <option defaultValue='20'>20</option>
            <option defaultValue='30'>30</option>
            <option defaultValue='40'>40</option>
            <option defaultValue='50'>50</option>
            </select>
    </div>
  )
}

export default SelectMinute