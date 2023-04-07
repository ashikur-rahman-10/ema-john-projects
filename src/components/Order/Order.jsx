import React, { useState } from "react";
import Cart from "../cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../RivewItem/ReviewItem";
import "./Order.css";
import { removeFromDb } from "../../utilities/fakedb";
// import Product from "../product/Product";

const Order = () => {
    const savedCart = useLoaderData();

    const [cart, setCart] = useState(savedCart);

    const handleRemoveItem = (id) => {
        const remainingItem = cart.filter((item) => item.id !== id);
        setCart(remainingItem);
        removeFromDb(id);
        console.log(id);
    };
    // console.log(cart);
    return (
        <div className="shop-container">
            <div className="review-container">
                {cart.map((item) => (
                    <ReviewItem
                        key={item.id}
                        item={item}
                        handleRemoveItem={handleRemoveItem}
                    ></ReviewItem>
                ))}
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;
