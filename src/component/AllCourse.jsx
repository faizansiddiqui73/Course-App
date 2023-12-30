import React, { useEffect, useState } from 'react';
import Course from './Course';
import axios from 'axios';
import { toast } from 'react-toastify';
import base_url from '../api/bootapi';

function AllCourse() {
    const [courses, setCourse] = useState([]);

    const getAllCourseFromServer = () => {
        axios.get(`${base_url}/courses`) //hit the api 
            .then((response) => {
                console.log('Response from server:', response.data);
                setCourse(response.data);
                toast.success("Content loaded", { position: 'bottom-center' });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                //Handle the error
                toast.error("Something went wrong", {
                    position: 'bottom-center'
                }
                )
            });
    };

    //calling the loading course function
    useEffect(() => {
        document.title = "All Courses";
        getAllCourseFromServer();
    }, []);

    const updateCourses = (id)=>{
        setCourse(courses.filter((c)=> c.id!=id))
    }

    return (
        <div>
            <h1>All Courses</h1>
            <p>List of courses:</p>
            {courses.length > 0 ? (
                courses.map((item) => <Course key={item.id} course={item} update={updateCourses} />)
            ) : (
                <p>No courses available</p>
            )}
        </div>
    );
}

export default AllCourse;
