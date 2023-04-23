import React from 'react'
import headerMenu from '../assets/menu/headerMenu.png'
import useCatalogue from '../hooks/useCatalogue'


export default function Menu() {

    const {
        setSelectPicar,
        selectMenu,
        setSelectMenu,
        setSelectCarta,
        setSelectBebidas
    } = useCatalogue()

    const ifMenu = () => {
        if (selectMenu === 'none') {
            setSelectPicar('none')
            setSelectMenu('flex')
            setSelectCarta('none')
            setSelectBebidas('none')
        } else {
            setSelectMenu('none')
        }
    }
    return (
        <div className='menu-wrap' onClick={ifMenu}>
            <p>Menú</p>

            <div className='wrap-course' style={{ display: `${selectMenu}` }}>
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
