import { useState, useEffect, useReducer } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import './App.css'
import Modal from './components/Modal'
import { createPortal } from 'react-dom';
import moment from 'moment'

function App() {
  const [value, onChange] = useState();
  const [clicked, click] = useState(false);


  const onButton = (planList, action) => {
    const {data} = planList;
    //리듀서 작성
    switch (action.type) {
      case 'ADD' :
        // eslint-disable-next-line no-case-declarations
        const newPlan = {
          id : self.crypto.randomUUID(),
          title : action.payload.title,
          content : action.payload.content,
          tag : action.payload.tag,
          date : action.payload.date,
          time : action.payload.time
        }

        return { data : [...data, newPlan] } ;

      case 'UPDATE' :
        console.log('update reducer called');
    } 
  }

  

  const [planList, dispatch] = useReducer(onButton, {data: []});
  
  const onClose = () => {
    click(false);
  }

  useEffect(() => {
    if (value !== undefined) {
      click(true);
    }
  },[value]);

 

  return (
    <>
      <Calendar onChange={onChange} value={value} navigationLabel={null} formatDay={(locale, date) => moment(date).format("DD")}
      showNeighboringMonth={false} tileContent={( { date } ) => {
        
        if(planList.data.find(plan => plan.date.getDate() === date.getDate())) {
          return (
            <>
              <div className="flex justify-center items-center absoluteDiv">
                <div className="dot" onClick={()=> console.log('clicked')}></div>
              </div>
            </>
          );
          }
      }}/>
        {clicked && createPortal(      
          <Modal date={value} onClose={onClose} onButton={dispatch} className='z-20'></Modal>, document.body)}
    </>
  )
}

export default App
