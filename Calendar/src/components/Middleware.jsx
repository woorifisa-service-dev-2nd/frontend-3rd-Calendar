import React, { useContext } from 'react'
import Modal from './Modal'
import { MainContext } from '../App';

const Middleware = ({ onClose, onAddTag }) => {
	const values = useContext(MainContext);
	const filterSelected = values.planList.data.find(plan => plan.date.getDate() === values.value.getDate());

	return (
		<div>
			<Modal onClose={onClose} plan={filterSelected} onAddTag={onAddTag}></Modal>
		</div>
	)
}

export default Middleware