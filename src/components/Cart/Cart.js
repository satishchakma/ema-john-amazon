import React from 'react';

const Cart = (props) => {
    // const total = props.cart.reduce( (total, pd) => total + pd.price, 0);
    // this code is equivalent to this:
    let total = 0;
    for(let i = 0; i < props.cart.length; i++){
        const prd = props.cart[i];
        total = total + prd.price;
    };

    let shipping = 0;
    if(total > 35){
        shipping= 12.99;
    }
    else if (total > 100){
        shipping = 25.99;
    }
    else if (total > 330){
        shipping = 35.99;
    }

    const tax = total /10 ;
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    const formatNumber = num => {
        const precise = num.toFixed(2);
        return Number(precise);
    }
    
    return (
        <div>
            <h1> This is cart</h1>
            <h5>Order summary: {props.cart.length}</h5>
            <h5>Shipping cost: {shipping}</h5>
            <h5>Tax: {formatNumber(tax)}</h5>
            <h5>Total price: {grandTotal}</h5>
        </div>
    );
};

export default Cart;