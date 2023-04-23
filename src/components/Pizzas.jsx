import React from 'react'
import useCatalogue from "../hooks/useCatalogue"

export default function Pizzas() {

    const {
        selectPizzas,
        setSelectPicar,
        setSelectMenu,
        setSelectPizzas,
        setSelectCarta,
        setSelectBebidas,
        setSelectHamburgers
    } = useCatalogue()

    const ifPizzas = () => {
        if (selectPizzas === 'none') {
            setSelectPizzas('flex')
            setSelectPicar('none')
            setSelectMenu('none')
            setSelectCarta('none')
            setSelectBebidas('none')
            setSelectHamburgers('none')
        } else {
            setSelectPizzas('none')
        }
    }

  return (
    <div className='pizzas-wrap' onClick={ifPizzas}>
    <p>Pizzas</p>

    <div className='wrap-pizza' style={{ display: `${selectPizzas}` }}>
        <ol className='pizzas-pizza-list'>
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
