import React from 'react'
import useCatalogue from "../hooks/useCatalogue"

export default function Hamburgers() {

  const {
    selectHamburgers,
    setSelectPicar,
    setSelectMenu,
    setSelectPizzas,
    setSelectCarta,
    setSelectBebidas,
    setSelectHamburgers
} = useCatalogue()

const ifHamburgers = () => {
    if (selectHamburgers === 'none') {
      setSelectHamburgers('flex')
        setSelectPizzas('none')
        setSelectPicar('none')
        setSelectMenu('none')
        setSelectCarta('none')
        setSelectBebidas('none')
    } else {
        setSelectHamburgers('none')
    }
}

  return (
    <div className='hamburgers-wrap' onClick={ifHamburgers}>
    <p>Hamburguesas</p>

    <div className='wrap-hamburgers' style={{ display: `${selectHamburgers}` }}>
        <ol className='hamburgers-hamburger-list'>
            <li>Margarita</li>
            <li>Cuatro Quesos</li>
            <li>Napolitana o Romana</li>
            <li>Diávola</li>
            <li>Barbacoa</li>
            <li>Cuatro Estaciones</li>
            <li>Carbonara</li>
            <li>Funghi</li>
            <li>Calzona</li>
        </ol>

    </div>


</div>
  )
}
