import React from 'react'

export const SelectDayNight = ({setDayNight}) => {
  return (
    <div>
         <select onChange={(e)=>setDayNight(e.target.value)}>
            <option value='AM'>AM</option>
            <option value='PM'>PM</option>
        </select>
    </div>
  )
}
