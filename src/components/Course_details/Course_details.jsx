import React from "react";
import { FaDollarSign, FaBookOpen } from "react-icons/fa6";

const Course_details = ({ course }) => {
    const { course_name, course_details, image, price, time } = course;
    return (
        <div className="border p-3 rounded flex-col justify-between">
            <div>
                <img src={image} alt="" />
                <h2 className="text-[17px] font-bold my-2">{course_name}</h2>
                <p>{course_details}</p>
            </div>
            <div className="my-5 flex justify-between items-center">
                <div className="flex items-center gap-1">
                    <i>
                        <FaDollarSign />
                    </i>
                    <p>Price : {price}</p>
                </div>
                <div className="flex items-center gap-1">
                    <i>
                        <FaBookOpen />
                    </i>
                    <p>Credit : {time}hr</p>
                </div>
            </div>
            <button className="bg-blue-500 w-full py-2 rounded text-white text-[17px]  ">
                Select
            </button>
        </div>
    );
};

export default Course_details;