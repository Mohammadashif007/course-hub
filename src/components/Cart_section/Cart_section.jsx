import React from "react";
import Cart_item from "../Cart_item/Cart_item";

const Cart_section = ({ cart_items, time, totalPrice, creditRemaining, index }) => {
    
    return (
        <div className="">
            <Cart_item
            cart_items={cart_items}
            time={time}
            totalPrice={totalPrice}
            creditRemaining={creditRemaining}
            index={index}
            ></Cart_item>
        </div>
    );
};

export default Cart_section;
