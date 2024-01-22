import React from 'react'
import { useStateValue } from '../context/Stateprovider'
import './checkoutproduct.css'
export const Checkoutproduct = ({ id, title, image, price, rating }) => {
    const [{basket}, dispatch] = useStateValue()
    const RemoveFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })

    }
    return (
        <div className='checkoutproduct'>
            <img className='checkoutimage__info' src={image} alt="" />
            <div className='checkoutproduct__info'><p className="checkoutproduct__title">{title}</p>
                <p className="checkoutproduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutproduct__rating">
                    {Array(rating).fill().map((_, i) => {
                        return <p> 🌟</p>


                    })}
                </div>
                <button onClick={RemoveFromBasket}>remove from basket</button>
            </div>



        </div>
    )
}
