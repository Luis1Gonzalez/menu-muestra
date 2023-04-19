import React from 'react'
import logo from '../assets/logos/logo-menu.png'

export default function Header() {
  return (
    <div className='h-[200px] py-1 flex justify-center'>
        <img className='h-[100%]' src={logo} alt="logo de la estancia" />
    </div>
  )
}
