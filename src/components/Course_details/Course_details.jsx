import React from 'react';

const Course_details = ({course}) => {
    const {course_name, course_details, image, price, time} = course;
    return (
        <div>
            <img src={image} alt="" />
            <h2 className='text-[17px] font-bold my-2'>{course_name}</h2>
            <p>{course_details}</p>
        </div>
    );
};

export default Course_details;