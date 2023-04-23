import React, { useState } from 'react'

export default function LaCarta() {

    const [selectCarta, setSelectCarta] = useState('none')

const ifCarta = () => {
if(selectCarta === 'none'){
    setSelectCarta('flex')
}else{
    setSelectCarta('none')
}
}

  return (
    <div className='laCarta-wrap'   onClick={ifCarta}>
    <p>La Carta</p>

    <div className='wrap-course'  style={{display:`${selectCarta}`}}>

        <p className='laCarta-course-title'>PLatos</p>
        <ol className='laCarta-course-list'>
            <li>Codillo de Cerdo al Horno</li>
            <li>Espagueti Carbonara</li>
            <li>Hamburguesa de Ternazco</li>
            <li>Merluza a la Riojana</li>
            <li>Pulpo a la Plancha</li>
            <li>Pechuga de Pollo al ajillo</li>
            <li>Risoto</li>
            <li>Ternasco de Aragon</li>
            <li>Conejo al Salmorejo</li>
        </ol>

        <p className='laCarta-course-title'>Ensaladas</p>
        <ol className='laCarta-course-list'>
            <li>Ensalada Campera</li>
            <li>Ensalada Capressa</li>
            <li>Ensalada Cesar</li>
            <li>Ensalada de Gambas con Salsa Fria de Merluza</li>
            <li>Ensalada Griega</li>
            <li>Ensalada Olivier</li>
        </ol>

        <p className='laCarta-course-title'>Raciones</p>
        <ol className='laCarta-course-list'>
            <li>Pan</li>
            <li>Patatas fritas</li>
            <li>Patatas al Horno</li>
            <li>Tempura de Vegetales</li>
            <li>Arroz</li>
        </ol>
        
    </div>


</div>
  )
}
