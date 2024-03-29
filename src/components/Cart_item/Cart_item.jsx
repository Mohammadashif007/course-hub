import React from "react";
import Cart_item_name from "../Cart_item_name/Cart_item_name";

const Cart_item = ({ cart_items, time, totalPrice, creditRemaining}) => {
    return (
        <div className="bg-white px-8 py-2 rounded">
            <h2 className=" border-b-2 pb-3 pt-2">
                Credit Hour Remaining : {creditRemaining}
            </h2>
            <h2 className="text-[18px] font-bold pt-3">Course Name</h2>
            {cart_items.map((item, idx) => (
                <Cart_item_name key={item.id} item={item} idx={idx}></Cart_item_name>
            ))}
            <h2 className="border-b-2 border-t-2 my-4 py-4">
                Total Credit Hours : {time}
            </h2>
            <h2 className="py-3">Total Price : ${totalPrice.toFixed(2)}USD </h2>
        </div>
    );
};

export default Cart_item;
