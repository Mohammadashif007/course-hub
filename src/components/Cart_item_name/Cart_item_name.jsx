import React, { useState } from 'react';

const Cart_item_name = ({item}) => {

    const {course_name, time} = item;
 
    return (
        <div className='my-3'>
            <p className='text-1xl'>{course_name}</p>
        </div>
        
    );
};

export default Cart_item_name;