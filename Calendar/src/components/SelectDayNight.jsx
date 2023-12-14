import React from 'react'

export const SelectDayNight = ({setDayNight, dayNight}) => {
  return (
    <div>
         <select onChange={(e)=>setDayNight(e.target.value)} value={dayNight}>
            <option defaultValue='AM'>AM</option>
            <option defaultValue='PM'>PM</option>
        </select>
    </div>
  )
}
