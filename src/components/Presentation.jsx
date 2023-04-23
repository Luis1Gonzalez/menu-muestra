import React from 'react'
import presentation from '../assets/presentation.gif'

export default function Presentation() {
  return (
    <div className='presentation-wrap'>
      <img className='presentation-gif-img' src={presentation} alt="gif de presentación" />
    </div>
  )
}
