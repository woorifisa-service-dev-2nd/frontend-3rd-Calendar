import React, { useContext, useState } from 'react'
import SetTime from './SetTime';
import { DispatchContext } from '../App.jsx'

const ModalForm = ({ onClose, value, date, children }) => {
	const isNewForm = (child) => {
		return child.startsWith('NEW') ? true : false;
	};

	const [nowValue, setValue] = useState(
		{
			id: isNewForm(children) ? self.crypto.randomUUID() : value.id,
			content: isNewForm(children) ? '' : value.content,
			classification: isNewForm(children) ? '공부' : value.classification,
			when: {
				fullDate: isNewForm(children) ? `${date.year}${date.month}${date.date}` : `${value.when.year}${value.when.month}${value.when.date}`,
				year: isNewForm(children) ? date.year : value.when.year,
				month: isNewForm(children) ? date.month : value.when.month,
				date: isNewForm(children) ? date.date : value.when.date,
				hour: isNewForm(children) ? '00' : value.when.hour,
				minute: isNewForm(children) ? '00' : value.when.minute,
				ampm: isNewForm(children) ? 'AM' : value.when.minute
			}
		}
	)

	const dispatch = useContext(DispatchContext);

	const addOrUpdateHandler = () => {
		if (isNewForm(children)) {
			dispatch({
				type: 'ADD',
				newSchedule: nowValue
			});
			onClose();
		}

		else {
			dispatch({
				type: 'UPDATE',
				updateSchedule: nowValue
			});
			onClose();
		}
	}

	const removeSchedule = () => {
		dispatch({
			type: 'DELETE',
			deleteSchedule: nowValue.id
		});
		onClose();
	};

	return (
		<>
			<h1>{`${nowValue.when.year}년 ${nowValue.when.month}월 ${nowValue.when.date}월 일정`}</h1>
			<form className='flex '>
				<div>
					<h2>제목</h2>
					<input type="text" className='w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded' placeholder='제목을 입력해주세요' onChange={e => setValue({ ...nowValue, title: e.target.value })} />
					<h2>내용</h2>
					<textarea className='w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded' placeholder='내용을 입력해주세요' value={nowValue.content} onChange={e => setValue({ ...nowValue, content: e.target.value })} >?</textarea>
					<h2>분류</h2>
					{/* 분류 버튼 컴포넌트 */}
					<h2>시간</h2>
					<SetTime />
				</div>
				<div className='flex justify-end'>
					<div>
						<button type='button' onClick={removeSchedule}>삭제</button>
					</div>
					<div>
						<button type='button' onClick={() => onClose()}>취소</button>
						<button type='button' onClick={addOrUpdateHandler}>확인</button>
					</div>
				</div>
			</form>
		</>
	)
}



export default ModalForm