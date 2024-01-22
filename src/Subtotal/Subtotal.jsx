import React from 'react'
import './subtotal.css'
import { useStateValue } from '../context/Stateprovider'
import { getBasketTotal } from '../context/reducer'
export const Subtotal = () => {
    const [{ basket }] = useStateValue();
    var price = []
    price.push(basket.map((price) => price.price))
    let totalprice = 0
    for (let i = 0; i <= price.length; i++) {
         totalprice = parseInt(totalprice)+ parseInt( price[i])
    }



    return (

        <div className='subtotal'>
            <p>
                subtotal ({basket.length} items): <strong> ${getBasketTotal(basket)}</strong>
            </p>
            <small className="subtotal__gift"><input type="checkbox" />
                this order contains a gift
            </small>
            <button>back to checkout</button>
        </div>
    )
}
