import React from 'react'
import useCatalogue from "../hooks/useCatalogue"

export default function Hamburgers() {

  const {
    selectHamburgers,
    setSelectPicar,
    setSelectMenu,
    setSelectPizzas,
    setSelectCarta,
    setSelectBebidas,
    setSelectHamburgers,
    time
  } = useCatalogue()

  const ifHamburgers = () => {
    if (selectHamburgers === 'none') {
      setSelectHamburgers('flex')
      setSelectPizzas('none')
      setSelectPicar('none')
      setSelectMenu('none')
      setSelectCarta('none')
      setSelectBebidas('none')
    } else {
      setSelectHamburgers('none')
    }
  }
  return (

    <>
      {time === 'night' ?
        (

          <div className='hamburgers-wrap' onClick={ifHamburgers}>
            <p>Hamburguesas</p>

            <div className='wrap-hamburgers' style={{ display: `${selectHamburgers}` }}>
              <ol className='hamburgers-hamburger-list'>
                <li>Original Burger <span>8€</span></li>
                <li>Smoke Trufada <span>12€</span></li>
                <li>Rahnchera <span>10€</span></li>
                <li>Mixta <span>11€</span></li>
                <li>Pulled Pork <span>10€</span></li>
                <li>Veggie <span>12€</span></li>
                <li>Pollo Gourmet <span>12€</span></li>
                <li>Club House <span>8€</span></li>
              </ol>

            </div>
          </div>
        ) : ''}
    </>
  )
}
