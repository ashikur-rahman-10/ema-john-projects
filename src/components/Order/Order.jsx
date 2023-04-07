import React from "react";
import Cart from "../cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../RivewItem/ReviewItem";
import "./Order.css";
// import Product from "../product/Product";

const Order = () => {
    const cart = useLoaderData();
    // console.log(cart);
    return (
        <div className="shop-container">
            <div className="review-container">
                {cart.map((item) => (
                    <ReviewItem key={item.id} item={item}></ReviewItem>
                ))}
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;
