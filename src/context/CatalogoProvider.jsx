import { createContext, useState } from 'react'
import { menuParaPicar } from '../data/sections'

const CatalogueContext = createContext()

const CatalogueProvider = ({ children }) => {

    const [selectPicar, setSelectPicar] = useState('none')
    const [selectMenu, setSelectMenu] = useState('none')
    const [selectCarta, setSelectCarta] = useState('none')
    const [selectBebidas, setSelectBebidas] = useState('none')
    const [selectPizzas, setSelectPizzas] = useState('none')
    const [selectHamburgers, setSelectHamburgers] = useState('none')
    const [time, setTime] = useState('')

    return (
        <CatalogueContext.Provider
            value={{
                menuParaPicar,
                selectPicar,
                setSelectPicar,
                selectMenu,
                setSelectMenu,
                selectCarta,
                setSelectCarta,
                selectBebidas,
                setSelectBebidas,
                selectPizzas,
                setSelectPizzas,
                selectHamburgers,
                setSelectHamburgers,
                time,
                setTime
            }}
        >
            {children}
        </CatalogueContext.Provider>
    )
}

export {
    CatalogueProvider
}

export default CatalogueContext
