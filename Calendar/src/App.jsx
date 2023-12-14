import { useState, useEffect, createContext, useReducer } from 'react'
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

export const CalendarContext = createContext();
export const DispatchContext = createContext();

const reducer = (schedule, action) => {
	switch (action.type) {
		case 'ADD':
			return [...schedule, action];
		case 'UPDATE':
			return schedule.filter(schedule => schedule.id === action.id ? { ...action } : schedule);
		case 'DELETE':
			return schedule.filter(schedule => schedule.id !== action);
	}
}

function App() {
	const [value, onChange] = useState(new Date());
	const [clicked, click] = useState(false);

	const [schedule, dispatch] = useReducer(reducer, dummyData);

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

	return (
		<CalendarContext.Provider value={schedule}>
			<DispatchContext.Provider value={dispatch}>
				<Calendar
					onChange={onChange}
					value={value}
					formatDay={(locale, date) => moment(date).format("DD")}
					navigationLabel={null}
				/>
				{clicked && createPortal(
					<Modal onClose={onClose} date={getDate}></Modal>, document.body
				)}
			</DispatchContext.Provider>
		</CalendarContext.Provider>
	);
}

export default App
