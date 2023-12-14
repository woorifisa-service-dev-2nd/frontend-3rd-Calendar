import { useState } from 'react'
import './App.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import moment from 'moment'


function App() {
	const [value, onChange] = useState(new Date())

	return (
		<>
			<Calendar
				onChange={onChange}
				value={value}
				formatDay={(locale, date) => moment(date).format("DD")}
				navigationLabel={null}
				className="mx-auto w-96 text-sm border-b"
			/>
		</>
	)
}

export default App
