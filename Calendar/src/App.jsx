import { useState, useEffect } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import './App.css'
import Modal from './components/Modal'
import { createPortal } from 'react-dom';
import moment from 'moment'

let dummyData = [
	{
		id: 1,
		classification: '운동',
		content: '등운동',
		when: {
			year: '2023',
			month: '12',
			date: '18',
			hour: '06',
			minute: '50',
			ampm: 'PM'
		}
	},
	{
		id: 2,
		classification: '약속',
		content: '진천이 형과 술약속',
		when: {
			year: '2023',
			month: '12',
			date: '14',
			hour: '07',
			minute: '30',
			ampm: 'PM'
		}
	},
	{
		id: 3,
		classification: '공부',
		content: 'react hooks 공부하기',
		when: {
			year: '2023',
			month: '12',
			date: '18',
			hour: '11',
			minute: '00',
			ampm: 'AM'
		},
	}
];

function App() {
	const [schedule, setSchedule] = useState(dummyData);
	const [value, onChange] = useState(new Date());
	const [clicked, click] = useState(false);

	useEffect(() => {
		if (value !== undefined) {
			click(true);
		}
	}, [value]);

	const getDate = {
		year: value.getFullYear(),
		month: value.getMonth() + 1,
		date: value.getDate()
	}

	const onClose = () => {
		click(false);
	}

	const onAddHandler = (inputValue) => {
		setSchedule([...schedule, { inputValue }])
	}

	const removeScheduleHandler = (inputValue) => {
		setSchedule(schedule.filter(schedule => schedule.id !== inputValue.id));
	}

	const updateScehduleHandler = (inputValue) => {
		setSchedule(schedule.filter(schedule => schedule.id === inputValue.id ? { ...inputValue } : schedule));
	}

	return (
		<>
			<Calendar
				onChange={onChange}
				value={value}
				formatDay={(locale, date) => moment(date).format("DD")}
				navigationLabel={null}
			/>
			{clicked && createPortal(
				<Modal onAdd={onAddHandler} onClose={onClose} onUpdate={updateScehduleHandler} onRemove={removeScheduleHandler} date={getDate}></Modal>, document.body
			)
			}
		</>
	)

}

export default App
