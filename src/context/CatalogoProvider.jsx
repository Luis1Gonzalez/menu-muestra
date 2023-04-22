import { createContext } from 'react'
import { menuParaPicar } from '../data/sections'

const CatalogueContext = createContext()

const CatalogueProvider = ({ children }) => {


    return (
        <CatalogueContext.Provider
            value={{
                menuParaPicar
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
