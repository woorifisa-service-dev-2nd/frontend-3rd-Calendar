import React, { useState } from 'react'

const SetTime = () => {
	const [time, setTime] = useState({
		hour: '00',
		minute: '00',
		when: 'AM'
	});

	return (
		<>
			<select id="hour" value={time.hour} onChange={e => setTime({ ...time, hour: e.target.value })}>
				<option value="00">00</option>
				<option value="01">01</option>
				<option value="02">02</option>
				<option value="03">03</option>
				<option value="04">04</option>
				<option value="05">05</option>
				<option value="06">06</option>
				<option value="07">07</option>
				<option value="08">08</option>
				<option value="09">09</option>
				<option value="10">10</option>
				<option value="11">11</option>
				<option value="12">12</option>
			</select>
			<select id="minute" value={time.minute} onChange={e => setTime({ ...time, minute: e.target.value })}>
				<option value="00">00</option>
				<option value="10">10</option>
				<option value="20">20</option>
				<option value="30">30</option>
				<option value="40">40</option>
				<option value="50">50</option>
			</select>
			<select id="when" value={time.when} onChange={e => setTime({ ...time, when: e.target.value })}>
				<option value="AM">AM</option>
				<option value="PM">PM</option>
			</select>
		</>
	)
}

export default SetTime