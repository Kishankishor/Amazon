import React from 'react'
import { Product } from '../products/Product'
import './home.css'

export const Home = () => {
    return (
        <div className='home'>
            <div className="home_container">
                <img className='home__image' src="https://th.bing.com/th/id/R.6b32f9ded7a75e15940b1a5f8242410b?rik=i2xz3I%2b8cICAZg&riu=http%3a%2f%2fvignette1.wikia.nocookie.net%2frunescape2%2fimages%2fb%2fb9%2fAmazon_Echo_update_post_header.jpg%2frevision%2flatest%3fcb%3d20170206125320&ehk=NfzDz%2fkXY90KiDhgZ%2fk8iQ3UYzxrhquxEWt4KtmmYjY%3d&risl=&pid=ImgRaw&r=0" alt="" />
            </div>
            <div className="home_row"><Product
                id="12321341"
                rating={5}
                title="the lean startup: how constant innovation creates radically successful businesses"
                price={29.99}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400.jpg"
            /><Product
                    id="49538094"
                    title="kenwood kMix stand Mixer for baking, stylish kitchen mixer with K-beater, dough hook and whisk, 5 litre glass bowl"
                    price={239.0}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                /></div>
            <div className="home_row">
                <Product
                    id="4903850"
                    title="Samsung Curved  LED gaming monitor"
                    price={199.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"

                />
                <Product
                    id="23445930"
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={98.99}
                    rating={5}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
                <Product 
                id="3254354345"
                title="New Apple iPad Pro (12.9-inch, wi-fi, 128GB)- Silver(4th Generation)"
                price={598.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                />
            </div>
            <div className="home_row"><Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            /></div>


        </div>
    )
}
