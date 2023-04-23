import React from 'react'
import { CatalogueProvider } from './context/CatalogoProvider'
import Header from './shared/Header'
import Picar from './components/Picar'
import Menu from './components/Menu'
import LaCarta from './components/LaCarta'
import Footer from './shared/Footer'
import Bebidas from './components/Bebidas'
import Select from './components/Select'
import Pizzas from './components/Pizzas'
import Hamburgers from './components/Hamburgers'

export default function Core() {
    return (
        <div className="core-wrap">
            <CatalogueProvider>
                <Header />
                <Select />
                <Picar />
                <Menu />
                <LaCarta />
                <Pizzas />
                <Hamburgers />
                <Bebidas />
                <Footer />
            </CatalogueProvider>
        </div>
    )
}
