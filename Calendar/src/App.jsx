import { useState, useEffect } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import './App.css'
import Modal from './components/Modal'
import { createPortal } from 'react-dom';
import moment from 'moment'

function App() {
  const [value, onChange] = useState();
  const [clicked, click] = useState(false);

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
      <Calendar onChange={onChange} value={value} navigationLabel={null} formatDay={(locale, date) => moment(date).format("DD")}/>
      {clicked && createPortal(      
      <Modal date={value} onClose={onClose}></Modal>, document.body
      )
      }
    </>
  )
}

export default App
