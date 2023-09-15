import React from "react";
import Cart_item_name from "../Cart_item_name/Cart_item_name";
import Cart_item from "../Cart_item/Cart_item";

const Cart_section = ({ cart_items, time, totalPrice, creditRemaining }) => {
    
    return (
        <div className="">
            <Cart_item
            cart_items={cart_items}
            time={time}
            totalPrice={totalPrice}
            creditRemaining={creditRemaining}
            ></Cart_item>
        </div>
    );
};

export default Cart_section;
