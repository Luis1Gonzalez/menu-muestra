import React from 'react'
import useCatalogue from "../hooks/useCatalogue"
import pizzasGif from '../assets/pizzas.gif'

export default function Pizzas() {

    const {
        selectPizzas,
        setSelectPicar,
        setSelectMenu,
        setSelectPizzas,
        setSelectCarta,
        setSelectBebidas,
        setSelectHamburgers,
        time
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

        <>
            {time === 'night' ?
                (

                    <div className='pizzas-wrap' onClick={ifPizzas}>
                        <p>Pizzas</p>

                        <div className='wrap-pizza' style={{ display: `${selectPizzas}` }}>

                            <div className='wrap-gif'>
                                <img className='img-pizza-gif' src={pizzasGif} alt="gif de pizzas" />
                            </div>

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
                ) : ''}
        </>
    )
}
