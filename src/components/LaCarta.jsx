import useCatalogue from "../hooks/useCatalogue"


export default function LaCarta() {

    const {
        setSelectPicar,
        setSelectMenu,
        selectCarta,
        setSelectCarta,
        setSelectBebidas,
        setSelectPizzas,
        setSelectHamburgers
    } = useCatalogue()

    const ifCarta = () => {
        if (selectCarta === 'none') {
            setSelectPicar('none')
            setSelectMenu('none')
            setSelectCarta('flex')
            setSelectBebidas('none')
            setSelectPizzas('none')
            setSelectHamburgers('none')
        } else {
            setSelectCarta('none')
        }
    }

    return (
        <div className='laCarta-wrap' onClick={ifCarta}>
            <p>La Carta</p>

            <div className='wrap-course' style={{ display: `${selectCarta}` }}>

                <p className='laCarta-course-title'>PLatos</p>
                <ol className='laCarta-course-list'>
                    <li>Codillo de Cerdo al Horno <span>8€</span></li>
                    <li>Espagueti Carbonara <span>7€</span></li>
                    <li>Hamburguesa de Ternazco <span>8€</span></li>
                    <li>Merluza a la Riojana <span>10€</span></li>
                    <li>Pulpo a la Plancha <span>14€</span></li>
                    <li>Pechuga de Pollo al ajillo <span>8€</span></li>
                    <li>Risoto <span>9€</span></li>
                    <li>Ternasco de Aragon <span>9€</span></li>
                    <li>Conejo al Salmorejo <span>8€</span></li>
                </ol>

                <p className='laCarta-course-title'>Ensaladas</p>
                <ol className='laCarta-course-list'>
                    <li>Ensalada Campera <span>7€</span></li>
                    <li>Ensalada Capressa <span>7€</span></li>
                    <li>Ensalada Cesar <span>7€</span></li>
                    <li>Ensalada de Gambas<span>8€</span></li>
                    <li>Ensalada Griega <span>7€</span></li>
                    <li>Ensalada Olivier <span>8€</span></li>
                </ol>

                <p className='laCarta-course-title'>Raciones</p>
                <ol className='laCarta-course-list'>
                    <li>Pan <span>2€</span></li>
                    <li>Patatas fritas <span>4€</span></li>
                    <li>Patatas al Horno <span>4€</span></li>
                    <li>Tempura de Vegetales <span>3€</span></li>
                    <li>Arroz <span>4€</span></li>
                </ol>

            </div>


        </div>
    )
}
