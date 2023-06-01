import React from 'react'
import './Cart.css'
import CartCard from './Card'

import one from "../images/one.jpg";
import testImage from "../images/testImage.jpg";


const Cart = () => {
  return (
    <div>
        <h2 className="shoppingCartTitle">Your Shopping Cart</h2>
        <div className='column cardContainer'>
            <CartCard title="Title 1" price="$100" img={one} />
            <CartCard title="Title 1" price="$100" img={testImage} />
            <CartCard title="Title 1" price="$100" img={one} />
        </div>
    </div>
  )
}

export default Cart