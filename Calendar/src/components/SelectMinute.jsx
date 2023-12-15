import React from 'react'

const SelectMinute = ({ setMinute, minute }) => {
	return (
		<div className='inline-flex items-baseline'>
			<select onChange={(e) => setMinute(e.target.value)} value={minute} className='text-black'>
				<option defaultValue='00'>00</option>
				<option defaultValue='10'>10</option>
				<option defaultValue='20'>20</option>
				<option defaultValue='30'>30</option>
				<option defaultValue='40'>40</option>
				<option defaultValue='50'>50</option>
			</select>
			<p className='text-white mr-5'>분</p>
		</div>
	)
}

export default SelectMinute