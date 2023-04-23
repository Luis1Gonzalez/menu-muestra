import useCatalogue from "../hooks/useCatalogue"


export default function Bebidas() {

    const {
        setSelectPicar,
        setSelectMenu,
        setSelectCarta,
        selectBebidas,
        setSelectBebidas,
        setSelectPizzas,
        setSelectHamburgers
    } = useCatalogue()

    const ifBebidas = () => {
        if (selectBebidas === 'none') {
            setSelectPicar('none')
            setSelectMenu('none')
            setSelectCarta('none')
            setSelectBebidas('flex')
            setSelectPizzas('none')
            setSelectHamburgers('none')
        } else {
            setSelectBebidas('none')
        }
    }

    return (
        <div className='bebidas-wrap' onClick={ifBebidas}>
            <p>Bebidas</p>

            <div className='wrap-bebida' style={{ display: `${selectBebidas}` }}>

                <ol className='bebidas-bebida-list'>
                    <li>Vino de la Casa (botella) <span>10€</span></li>
                    <li>Vino de la Casa (copa) <span>2.5€</span></li>
                    <li>Vino de la Rioja (botella) <span>13€</span></li>
                    <li>Vino de la Rioja (copa) <span>4€</span></li>
                    <li>Vino de Cariñena (botella) <span>12€</span></li>
                    <li>Vino de Cariñena (copa) <span>3.5€</span></li>
                    <li>Cerveza <span>3€</span></li>
                    <li>Agua <span>2€</span></li>
                    <li>Refresco <span>2.5€</span></li>
                    <li>Limonada <span>3€</span></li>
                    <li>Ladron de Manzanas <span>3€</span></li>
                    <li>Sidra <span>3.5€</span></li>
                </ol>


            </div>


        </div>
    )
}
