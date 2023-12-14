import { useState, useEffect } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import './App.css'
import Modal from './components/Modal'
import { createPortal } from 'react-dom';
import moment from 'moment'

const dummySchedules = [];
const dummyTags = ['시험', '휴일'];

function App() {
  const [value, onChange] = useState();
  const [clicked, click] = useState(false);
  const [schedules, setSchedule] = useState(dummySchedules);
  const [tags, setTags] = useState(dummyTags);

  const addSceduleHandler = ({id, title, text, tag, date}) => {
    const newSchedule = {
      id,
      title,
      text,
      tag,
      date
    };

    const updateScedules = [...schedules, newSchedule];
    setSchedule(updateScedules);
    console.log(updateScedules);
  };

  const addTagHandler = (newTag) => {
    const newTags = [...tags, newTag];
    setTags(newTags);
    console.log(newTags);
  }

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
      <Calendar
        onChange={onChange}
        value={value}
        navigationLabel={null}
        formatDay={(locale, date) => moment(date).format("DD")}
        />
      {clicked && createPortal(      
      <Modal date={value} onClose={onClose} onAddSchedule={addSceduleHandler} onAddTag={addTagHandler} tags={tags}></Modal>, document.body
      )
      }
    </>
  )
}

export default App
