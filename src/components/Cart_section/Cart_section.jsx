import React from "react";
import Cart_item_name from "../Cart_item_name/Cart_item_name";

const Cart_section = ({ cart_items }) => {
    console.log(cart_items);
    return (
        <div className="text-center">
            <h2 className="text-2xl">Course Name</h2>
            {cart_items.map((item) => (
                <Cart_item_name key={item.id} item={item}></Cart_item_name>
            ))}
        </div>
    );
};

export default Cart_section;
