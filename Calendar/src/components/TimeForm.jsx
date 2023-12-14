import React from 'react'
import SelectMinute from './SelectMinute'
import SelectTime from './SelectTime'
import { SelectDayNight } from './SelectDayNight'
import {useState, useEffect} from 'react';

const TimeForm = ({onChange}) => {

    const [time, setTime] = useState();
    const [minute, setMinute] = useState();
    const [dayNight, setDayNight] = useState();

    useEffect(()=> {
        onChange({
            time, minute, dayNight
        })
    },[time,minute,dayNight])

  return (
    <div>
        <label className='block mb-2 text-xl text-[#FEFEDF]' htmlFor='title'>시간</label>
        <SelectTime setTime={setTime}/>
        <SelectMinute setMinute={setMinute}/>
        <SelectDayNight setDayNight={setDayNight}/>
    </div>
  )
}

export default TimeForm