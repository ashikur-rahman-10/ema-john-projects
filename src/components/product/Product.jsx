import React from 'react';
import './Product.css'
const Product = (props) => {
    const {name,id,img,ratings,price,seller}=props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h2 className='product-title'>{name}</h2>
                <p>Price:${price}</p>
                <p><small>Manufacture:{seller}</small></p>
                <p><small>Rating:{ratings} Star</small></p>
            </div>
            <button className='btn-cart'>Add to cart <i class="fa-solid fa-cart-plus"></i></button>

        </div>
    );
};

export default Product;