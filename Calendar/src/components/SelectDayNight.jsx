import React from 'react'

export const SelectDayNight = ({ setDayNight, dayNight }) => {
	return (
		<div className='inline-flex items-baseline'>
			<select onChange={(e) => setDayNight(e.target.value)} value={dayNight} className='text-black'>
				<option defaultValue='AM'>AM</option>
				<option defaultValue='PM'>PM</option>
			</select>
		</div>
	)
}
