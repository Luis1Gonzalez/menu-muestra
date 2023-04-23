
import useCatalogue from '../hooks/useCatalogue'

export default function Picar() {

    const { menuParaPicar,
        selectPicar,
        setSelectPicar,
        setSelectMenu,
        setSelectCarta,
        setSelectBebidas
    } = useCatalogue()


    const ifPicar = () => {
        if (selectPicar === 'none') {
            setSelectPicar('flex')
            setSelectMenu('none')
            setSelectCarta('none')
            setSelectBebidas('none')
        } else {
            setSelectPicar('none')
        }
    }

    return (
        <div className='picar-wrap' onClick={ifPicar}>
            <p>Para Picar</p>
            <div className='pic-map'>
                {menuParaPicar.map(pic => (
                    <div className='picar-pic' style={{ display: `${selectPicar}` }} key={pic.id}>

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
