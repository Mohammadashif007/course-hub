import React, { useState } from 'react';

const Cart_item_name = ({item}) => {
    const {course_name} = item;
    const [count, setCount] = useState(0);


    const handleCount = () => {
        setCount(count + 1);
    }
    // handleCount();

    return (
        <div className='my-3 '>
            <p className='text-1xl'>{course_name}</p>
        </div>
    );
};

export default Cart_item_name;