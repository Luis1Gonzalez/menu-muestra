
import { useState } from 'react'
import useCatalogue from '../hooks/useCatalogue'

export default function Picar() {
    
const { menuParaPicar } = useCatalogue()
const [selectPicar, setSelectPicar] = useState('none')

const ifPicar = () => {
if(selectPicar === 'none'){
    setSelectPicar('flex')
}else{
    setSelectPicar('none')
}
}

  return (
    <div className='Picar-wrap'  onClick={ifPicar}>
        <p>Para Picar</p>
        <div className='pic-map'>
        {menuParaPicar.map(pic => (
            <div className='Picar-pic' style={{display:`${selectPicar}`}} key={pic.id}>
                
                <div className='wrap-div-img'>
                <img src={pic.image} alt={`imagen del plato ${pic.name}`} />
                </div>

                <p>{pic.name}</p>
            </div>
            
        ))}
        </div>
    </div>
  )
}
