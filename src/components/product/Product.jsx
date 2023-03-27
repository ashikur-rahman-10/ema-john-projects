import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name,id,img,ratings,price,seller}=props.product
   const addToCart=props.addToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h2 className='product-title'>{name}</h2>
                <p>Price:${price}</p>
                <p><small>Manufacture:{seller}</small></p>
                <p><small>Rating:{ratings} Star</small></p>
            </div>
            <button onClick={()=>{addToCart(props.product)}} className='btn-cart'>Add to cart <FontAwesomeIcon icon={faShoppingCart} /></button>

        </div>
    );
};

export default Product;