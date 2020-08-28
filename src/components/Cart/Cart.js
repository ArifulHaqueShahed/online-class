import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce( (sum, sub) => sum + sub.price , 0)

    return (
        <div className="summary">
            <h2 className=" headline">Summary</h2><hr className="bg-primary"/>
            {
                cart.map(course => 
                    <div className="d-flex"> 
                        <p>course title: {course.title} | <span className="price-style"> ${course.price}</span></p>
                        
                    </div>)
            }<hr className="bg-primary"/>

            <p> Enrolled Courses: {cart.length} </p><hr className="bg-primary"/>
            <p>Total Cost : ${total.toFixed(2)}</p><hr className="bg-primary"/>
            <button className="purchase-button">Purchase Now</button>
        </div>
    );
};

export default Cart;