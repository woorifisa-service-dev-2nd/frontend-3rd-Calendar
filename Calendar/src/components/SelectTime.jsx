import React from 'react'

const SelectTime = ({setTime, time}) => {

  return (
    <div className='inline-flex items-baseline'>
        <select key={time} onChange={(e)=> setTime(e.target.value)} value={time} className='text-black '>
            <option value='01'>01</option>
            <option value='02'>02</option>
            <option value='03'>03</option>
            <option value='04'>04</option>
            <option value='05'>05</option>
            <option value='06'>06</option>
            <option value='07'>07</option>
            <option value='08'>08</option>
            <option value='09'>09</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='23'>12</option>  
            
            </select>
            <p className='text-white mr-5'>시</p>
    </div>
  )
}

export default SelectTime