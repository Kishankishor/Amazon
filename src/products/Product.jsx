import React from 'react'
import { useStateValue } from '../context/Stateprovider'
import './product.css'
export const Product = ({ rating, title, price, image, id }) => {
    const [basket, dispatch] = useStateValue();
    
    const addToBasket = () => {
        //dispatch the items into data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item : {
                id : id,
                title:title,
                image: image,
                price: price,
                rating: rating

            },
        })
        console.log(basket)

    }
    return (
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>
                <p className='product__price'> <small>$</small>
                    <strong>{price}

                    </strong></p>
                <div className="product__rating">{Array(rating).fill().map((_, i) => {
                    return <p> 🌟</p>


                })} </div>

            </div>
            <img className='product__image' src={image} alt="" />
            <button className='product__button' onClick={addToBasket}>add to basket</button>


        </div>
    )
}
