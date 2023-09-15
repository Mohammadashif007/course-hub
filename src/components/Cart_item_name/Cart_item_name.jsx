import React, { useState } from 'react';

const Cart_item_name = ({item, idx}) => {

    const {course_name} = item;
 
    return (
        <div className='my-3'>
            <p className='text-1xl '>{idx+1}. {course_name}</p>
        </div>
        
    );
};

export default Cart_item_name;