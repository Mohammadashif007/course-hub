import React, { useEffect, useState } from "react";
import Course_details from "../Course_details/Course_details";

const Courses_container = ({handleAddToCart}) => {
    const [courses, setCourses] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("data.json");
            const data = await response.json();
            setCourses(data);
        };
        fetchData();
    }, []);

   

    return (
        <div className="col-span-3 grid grid-cols-3 gap-5">
            {courses.map((course) => (
                <Course_details
                    key={course.id}
                    course={course}
                    handleAddToCart={handleAddToCart}
                ></Course_details>
            ))}
        </div>
    );
};

export default Courses_container;
