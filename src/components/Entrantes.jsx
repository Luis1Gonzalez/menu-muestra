
import { useState } from 'react'
import useCatalogue from '../hooks/useCatalogue'

export default function Entrantes() {
    
const { menuEntrantes } = useCatalogue()
const [selectEntrantes, setSelectEntrantes] = useState('none')

const ifEntrante = () => {
if(selectEntrantes === 'none'){
    setSelectEntrantes('flex')
}else{
    setSelectEntrantes('none')
}
}

  return (
    <div className='entrantes-wrap'  onClick={ifEntrante}>
        <p>Entrantes</p>
        <div className='entrante-map'>
        {menuEntrantes.map(entrante => (
            <div className='Entrantes-entrante' style={{display:`${selectEntrantes}`}} key={entrante.id}>
                
                <div className='wrap-div-img'>
                <img src={entrante.image} alt={`imagen del plato ${entrante.name}`} />
                </div>

                <p>{entrante.name}</p>
            </div>
            
        ))}
        </div>
    </div>
  )
}
