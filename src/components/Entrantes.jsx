
import useCatalogue from '../hooks/useCatalogue'

export default function Entrantes() {
    
const { menuEntrantes } = useCatalogue()
console.log(menuEntrantes)
  return (
    <div className='entrantes-wrap'>
        <p>Entrantes</p>
        <div className='entrante-map'>
        {menuEntrantes.map(entrante => (
            <div className='Entrantes-entrante' key={entrante.id}>
                <img src={entrante.image} alt={`imagen del plato ${entrante.name}`} />
            </div>
        ))}
        </div>
    </div>
  )
}
