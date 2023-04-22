import React from 'react'
import { CatalogueProvider } from './context/CatalogoProvider'
import Header from './shared/Header'
import Entrantes from './components/Picar'
import Menu from './components/Menu'
import LaCarta from './components/LaCarta'
import Footer from './shared/Footer'
import Bebidas from './components/Bebidas'

export default function Core() {
    return (
        <div className="core-wrap">
            <CatalogueProvider>
                <Header />
                <Entrantes />
                <Menu />
                <LaCarta />
                <Bebidas />
                <Footer />
            </CatalogueProvider>
        </div>
    )
}
