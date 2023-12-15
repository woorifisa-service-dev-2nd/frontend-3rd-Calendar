/* eslint-disable no-case-declarations */
import { useState, useEffect, useReducer } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import './App.css'
import Modal from './components/Modal'
import { createPortal } from 'react-dom';
import moment from 'moment'
import Middleware from './components/Middleware';

function App() {
  const [value, onChange] = useState();
  const [clicked, click] = useState(false);
  const colors = [`#5A1B00`,`#006E60`, `#FFA600` ];
  

  const tagList = ['시험', '약속', '취미'];
  const [tags, setTags] = useState(tagList);
  

  const onButton = (planList, action) => {
    const {data} = planList;
    //리듀서 작성
    switch (action.type) {
      case 'ADD' :
        const newPlan = {
          content : action.payload.content,
          tag : action.payload.tag,
          date : action.payload.date,
          time : action.payload.time
        }

        return { data : [...data, newPlan] } ;

      case 'UPDATE' :

        const updatedPlan = action.payload;
        const updatedPlans = data.map(p => p.date.getDate() === updatedPlan.date.getDate() ?  updatedPlan : p );

        return {data : updatedPlans};

      case 'DELETE' :

        const deletedPlans = data.filter(p => p.date.getDate() !== action.payload.date.getDate());

        return {data : deletedPlans};
    } 
  }

  const addTagHandler = (newTag) => {

    const newTags = [...tags, newTag];
    colors.push("#"+(parseInt(Math.random()*0xffffff)).toString(16));
    setTags(newTags);
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

  const getRandomColor = (plan) => {
    const tag = plan.tag;
    const idx = tags.indexOf(tag);
    return colors[idx];
  }

 

  return (
    <>
      <Calendar onChange={onChange} value={value} navigationLabel={null} formatDay={(locale, date) => moment(date).format("DD")}
      showNeighboringMonth={false} tileContent={( { date } ) => {
        const arr = planList.data.filter(plan => plan.date.getDate() === date.getDate());
        if(arr.length !== 0) {
          return (
            <>
              <div className="flex justify-center items-center absoluteDiv">
                <div className="dot" style={{backgroundColor : getRandomColor(arr[0])}}></div>
              </div>
            </>
          );
          }
      }}/>
        {clicked && createPortal(      
          <Middleware date={value} onClose={onClose} onButton={dispatch} className='z-20' plans={planList}  tags={tags} onAddTag={addTagHandler}

          ></Middleware>, document.body)}
    </>
  )
}

export default App
