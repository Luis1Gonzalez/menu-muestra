import React from 'react'
import logo from '../assets/logos/logo-menu.png'

export default function Header() {
  return (
    <div className='header-wrap'>
        <img className='header-logo' src={logo} alt="logo de la estancia" />
    </div>
  )
}
