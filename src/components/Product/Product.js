import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCartShopping } from '@fortawesome/free-solid-svg-icons';



const Product = (props) => {
    const {img, name, seller, price, stock} = props.product;
    
    return (
        
        <div className='single-product'>
            <div className='product-image'>
                <img src={img} alt='cat'></img>
            </div>
            <div className='product-details'>
                <h4>{name}</h4>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>$ {price}</p>
                <br/>
                <p><small>Only {stock} left in stock - Order NOW!</small></p>
                <button 
                className='main-button'
                onClick={ () => props.productAdd(props.product)}
                > <FontAwesomeIcon icon={faCartShopping}/> add to cart</button>
               
                

                
                

            </div>
            
        </div>
     
    );
};

export default Product;