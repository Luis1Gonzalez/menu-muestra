import React from 'react'
import Header from './shared/Header'
import Entrantes from './components/Entrantes'
import Menu from './components/Menu'
import LaCarta from './components/LaCarta'
import Footer from './shared/Footer'
import Bebidas from './components/Bebidas'

export default function Core() {
  return (
    <div  className="core-wrap">
        <Header />
        <Entrantes />
        <Menu />
        <LaCarta />
        <Bebidas />
        <Footer />
    </div>
  )
}
