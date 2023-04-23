import React from 'react'
import {BsCloudMoon} from 'react-icons/bs'
import {BsCloudSun} from 'react-icons/bs'

export default function Select() {
  return (
    <div className='select-wrap'>
      <div className='select-time select-time-day'><span><BsCloudSun /></span>Comida</div>
      <div className='select-time select-time-night'><span><BsCloudMoon /></span>Cena</div>
    </div>
  )
}
