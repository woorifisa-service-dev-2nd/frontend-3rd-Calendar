export const createDots = ({ date, planList }) => {

	if (planList.data.find(plan => plan.date.getDate() === date.getDate())) {
		return (
			<>
				<div className="flex justify-center items-center absoluteDiv">
					<div className="dot" onClick={() => console.log('clicked')}></div>
				</div>
			</>
		);
	}
}