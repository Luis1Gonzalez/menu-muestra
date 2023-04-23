import React, { useState } from 'react'

export default function Bebidas() {

    const [selectBebidas, setSelectBebidas] = useState('none')

const ifBebidas = () => {
if(selectBebidas === 'none'){
    setSelectBebidas('flex')
}else{
    setSelectBebidas('none')
}
}

  return (
    <div className='bebidas-wrap'   onClick={ifBebidas}>
    <p>Bebidas</p>

    <div className='wrap-bebida'  style={{display:`${selectBebidas}`}}>

        <ol className='bebidas-bebida-list'>
            <li>Vino de la Casa</li>
            <li>Vino de la Rioja</li>
            <li>Vino de Cariñena</li>
            <li>Cerveza</li>
            <li>Agua</li>
            <li>Refresco</li>
            <li>Limonada</li>
            <li>Ladron de Manzanas</li>
            <li>Sidra</li>
        </ol>

        
    </div>


</div>
  )
}
