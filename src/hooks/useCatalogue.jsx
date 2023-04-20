import { useContext} from 'react'
import CatalogueContext from '../context/CatalogoProvider'

const useCatalogue = () => {
    return useContext(CatalogueContext)
}

export default useCatalogue;

