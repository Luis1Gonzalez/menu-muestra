import React, { useEffect } from 'react'
import { BsCloudMoon } from 'react-icons/bs'
import { BsCloudSun } from 'react-icons/bs'
import useCatalogue from '../hooks/useCatalogue'


export default function Select() {

  const { time, setTime } = useCatalogue()



  const selectDay = () => {
    setTime('day')
  }

  const selectNight = () => {
    setTime('night')
  }

  return (
    <div className='select-wrap'>
      <div onClick={selectDay} className='select-time select-time-day'><span><BsCloudSun /></span>Comida</div>
      <div onClick={selectNight} className='select-time select-time-night'><span><BsCloudMoon /></span>Cena</div>
    </div>
  )
}
