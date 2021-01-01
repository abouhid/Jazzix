/* eslint-disable */
import React, { useState, useContext } from 'react';
import { Context } from '../Context';
import CartItem from '../components/CartItem'

function Cart() {
    const [buttonText, setButtonText] = useState("Place Order")
    const {cartItems, emptyCart} = useContext(Context)
    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})

    function placeOrder() {
        setButtonText("Ordering...")
        setTimeout(() => {
            console.log("Order placed!")
            setButtonText("Place Order")
            emptyCart()
        }, 1500)
    }
    const cartItemElements = cartItems.map(item => (
      // console.log(item)
      <CartItem key={item.id} item={item} />
    ))
    
  return (
    <main className="cart-page p-3">
    <h1>Check out</h1>
    {cartItemElements}
    <p className="total-cost">Total: {totalCostDisplay}</p>
    <div className="order-button">
    <button onClick={placeOrder}>{buttonText}</button>
    </div>
</main>
  );
}

export default Cart;
