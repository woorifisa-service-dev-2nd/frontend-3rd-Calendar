import React from 'react'
import SelectMinute from './SelectMinute'
import SelectTime from './SelectTime'
import { SelectDayNight } from './SelectDayNight'
import {useState, useEffect} from 'react';

const TimeForm = ({onChange, selectedTime}) => {

    const [time, setTime] = useState('01');
    const [minute, setMinute] = useState('00');
    const [dayNight, setDayNight] = useState('AM');



    useEffect(()=> {
        onChange({
            time, minute, dayNight
        })
    },[time,minute,dayNight])

  return (
    <div>
        <label className='block mb-2 text-xl text-[#FEFEDF]' htmlFor='title'>시간</label>
        <SelectTime setTime={setTime} time = {selectedTime?.time}/>
        <SelectMinute setMinute={setMinute} minute= {selectedTime?.minute}/>
        <SelectDayNight setDayNight={setDayNight} dayNight={selectedTime?.dayNight}/>
    </div>
  )
}

export default TimeForm