import React from 'react'
import { useStateValue } from '../context/Stateprovider'
import { Subtotal } from '../Subtotal/Subtotal'
import './checkout.css'
import { Checkoutproduct } from './Checkoutproduct'

export const Checkout = () => {
    const [{ basket , user }] = useStateValue();
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                <div>
                    <h3>hello , {user?.email}</h3>
                    <h2 className="checkout__title">
                        your shopping basket
                    </h2>
                    {basket.map(item=>{
                     return <Checkoutproduct
                        id = {item.id}
                        title= {item.title}
                        price = {item.price}
                        image = {item.image}
                        rating = {item.rating}/>
                    })}

                </div>



            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}
