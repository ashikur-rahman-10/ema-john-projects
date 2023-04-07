import React from "react";
import "./Cart.css";

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        product.quantity = product.quantity || 1;
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = product.quantity + quantity;
    }
    let tax = (total * 7) / 100;
    let grandTotal = total + totalShipping + tax;
    return (
        <div className="cart">
            <h3>Order Summary</h3>
            <p>Cart item:{quantity}</p>
            <p>Total price:${total}</p>
            <p>Total Shipping:${totalShipping}</p>
            <p>Tax:${tax.toFixed(2)}</p>
            <h6>Grand Total:{grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;
