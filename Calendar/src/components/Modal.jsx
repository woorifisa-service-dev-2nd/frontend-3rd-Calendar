import React from 'react'

import TimeForm from './TimeForm';
import { useContext, useState } from 'react';
import AddTag from './AddTag';
import { DispatchContext, MainContext } from '../App';

const Modal = ({ onClose, plan, onAddTag }) => {
	const values = useContext(MainContext);
	const dispatch = useContext(DispatchContext);

	const [content, setContent] = useState(plan !== undefined ? plan.content : '');
	const [time, setTime] = useState();
	const [tag, setTag] = useState(plan !== undefined ? plan.tag : '');

	const [radioVisible, setRadioHidden] = useState('true');
	let key = 0;

	const getThisDate = () => {
		const y = values.value.getFullYear();
		const m = values.value.getMonth() + 1;
		const d = values.value.getDate();
		return `${y}년 ${m}월 ${d}일`;
	}

	const clickHandler = () => {
		const dateFormatting = { ...values };
		const date = dateFormatting.value;

		if (plan === undefined) {
			dispatch({ type: "ADD", payload: { content, tag, date, time } });
		}
		else
			dispatch({ type: "UPDATE", payload: { content, tag, date, time } });

		onClose();
	}

	const closeHandler = () => {
		dispatch({ type: "DELETE", payload: plan });
		onClose();
	}

	const addTag = () => {
		onAddTag({ type: 'ADD', tag: tag });
	};

	const changeRadio = () => {
		if (radioVisible === 'true') {
			//setTagInputHidden('false');
			setRadioHidden('false');
		}
		else if (radioVisible === 'false') {
			//setTagInputHidden('true');
			setRadioHidden('true');
		}
	};

	const checked = (t) => {
		if (t === tag) return 'checked';
		else return '';
	}

	return (
		<div>
			<div data-cy="modal-backdrop" className='fixed top-0 left-0 w-full h-full backdrop-blur-md z-30' onClick={onClose}></div>
			<div className='fixed z-40 w-1/2 p-8 m-0 transform -translate-x-1/2 -translate-y-1/2 border-none rounded shadow-xl top-1/2 left-1/2 bg-[#5F4119]'>
				<div className='block mb-2 text-2xl text-center text-[#FEFEDF]'>{getThisDate()}의 일정</div>
				<div>

					<div>
						<label className='block mb-2 text-xl text-[#FEFEDF]' htmlFor='content'>태그</label>
						{radioVisible === 'true' &&
							(<div>
								{values.tags.map((t) => <AddTag key={key++} tag={t} onChange={setTag} checked={checked(t)} />)}

								<button type='button' onClick={changeRadio} className='text-[#FEFEDF]'>태그 생성</button>
							</div>)}
						{radioVisible === 'false' &&
							(<div>
								<input type="text" onChange={e => setTag(e.target.value)} />
								<button className='text-[#FEFEDF]' type='button' onClick={changeRadio}>취소</button>
								<button className='text-[#FEFEDF]' type='button' onClick={() => { addTag(); changeRadio(); }}>생성</button>
							</div>)}
					</div>

					<label className='block mb-2 text-xl text-[#FEFEDF]' htmlFor='content'>내용</label>
					<input className='w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-black rounded' placeholder='내용을 입력하세요' defaultValue={plan?.content} id='content' onChange={e => setContent(e.target.value)} />

					<TimeForm onChange={setTime} selectedTime={plan?.time} />

					<div className='inline-flex items-stretch'>
						{plan !== undefined ? <button className='text-xl text-orange-600 bg-[#DFE0DF] self-stretch' type='button'
							onClick={closeHandler}>삭제</button> : ''}
						<div className='inline-flex  self-stretch'>
							<button className='text-xl text-orange-600 bg-[#DFE0DF]' type='button' onClick={onClose}>취소</button>
							<button className='text-xl text-lime-600 bg-[#DFE0DF]' type='button'
								onClick={clickHandler}>등록</button>
						</div>
					</div>

				</div>

			</div>
		</div>
	)
}

export default Modal