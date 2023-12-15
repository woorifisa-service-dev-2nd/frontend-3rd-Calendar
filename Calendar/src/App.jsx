import { useState, useEffect, createContext, useReducer } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import './App.css'
import Modal from './components/Modal'
// import CreateDots from './components/createDots';
import { createPortal } from 'react-dom';
import moment from 'moment'

const dummyData = [
	{
		id: 1,
		classification: '운동',
		content: '등운동',
		when: {
			fullDate: '20231218',
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
			fullDate: '20231214',
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
			fullDate: '20231218',
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

const reducer = (schedules, action) => {
	switch (action.type) {
		case 'ADD':
			return [...schedules, action];
		case 'UPDATE':
			return schedules.filter(schedule => schedule.id === action.id ? { ...action } : schedule);
		case 'DELETE':
			return schedules.filter(schedule => schedule.id !== action);
	}
}

function App() {
	const [value, onChange] = useState(new Date());
	const [clicked, click] = useState(false);

	const [schedules, dispatch] = useReducer(reducer, dummyData);

	useEffect(() => {
		if (value !== undefined) {
			click(true);
		}
	}, [value]);

	const getDate = {
		fullDate: `${value.getFullYear()}${value.getMonth() + 1}${value.getDate()}`,
		year: value.getFullYear(),
		month: value.getMonth() + 1,
		date: value.getDate()
	}

	const onClose = () => {
		click(false);
	}

	return (
		<CalendarContext.Provider value={schedules}>
			<DispatchContext.Provider value={dispatch}>
				<Calendar
					onChange={onChange}
					value={value}
					formatDay={(locale, date) => moment(date).format("DD")}
					navigationLabel={null}
					// tileContent={({  }) => <CreateDots planList={schedule}/>}
					tileContent={({ date }) => {
						const clickedDate = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`;
						
						if (schedules.find(schedule => schedule.when.fullDate === clickedDate)) {
							return (
								<>
									<div className="flex justify-center items-center absoluteDiv">
										<div className="dot" onClick={() => console.log('clicked')}></div>
									</div>
								</>
							);
						}
					}}
				/>
				{clicked && createPortal(
					<Modal onClose={onClose} date={getDate}></Modal>, document.body
				)}
			</DispatchContext.Provider>
		</CalendarContext.Provider>
	);
}

export default App
