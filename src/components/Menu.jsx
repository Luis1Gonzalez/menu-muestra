import React from 'react'
import { useState } from 'react'
import headerMenu from '../assets/menu/headerMenu.png'

export default function Menu() {
    const [selectMenu, setSelectMenu] = useState('none')

const ifMenu = () => {
if(selectMenu === 'none'){
    setSelectMenu('flex')
}else{
    setSelectMenu('none')
}
}
    return (
        <div className='menu-wrap'   onClick={ifMenu}>
            <p>Menú</p>

            <div className='wrap-course'  style={{display:`${selectMenu}`}}>
                <div className='wrap-img'>
                <img className='menu-header-img' src={headerMenu} alt="foto header menu" />
                </div>

                <p className='menu-course-title'>Primer PLato</p>
                <ol className='menu-course-list'>
                    <li>Risoto</li>
                    <li>Ensalada Olivier</li>
                    <li>Ensalada Cesar</li>
                    <li>Espagueti Carbonara</li>
                </ol>

                <p className='menu-course-title'>Segundo PLato</p>
                <ol className='menu-course-list'>
                    <li>Codillo de Cerdo al Horno</li>
                    <li>Hamburguesa de Ternasco</li>
                    <li>Merluza a la Riojana</li>
                    <li>Pulpo a la plancha</li>
                </ol>

                <p className='menu-course-title'>Postre</p>
                <ol className='menu-course-list'>
                    <li>Quesillo</li>
                    <li>Cheezcake</li>
                    <li>Panacota</li>
                    <li>Brownie con Helado</li>
                </ol>
                
            </div>


        </div>
    )
}
