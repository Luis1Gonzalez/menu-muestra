import { createContext } from 'react'
import { menuEntrantes } from '../data/sections'

const CatalogueContext = createContext()

const CatalogueProvider = ({ children }) => {


    return (
        <CatalogueContext.Provider
            value={{
                menuEntrantes
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
