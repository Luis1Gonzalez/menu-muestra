import React from 'react'
import headerMenu from '../assets/menu/headerMenu.png'

export default function Menu() {
  return (
    <div className='menu-wrap'>
       <p>Menú</p>

       <div>
        <img className='menu-header-img' src={headerMenu} alt="foto header menu" />
       </div>
        
    </div>
  )
}
