import React from 'react';
import fakeData from '../../fakeData/fakeData.json';
import { useState } from 'react';
import './course.css';
import CourseData from '../CourseData/CourseData'
import EnrollCart from '../EnrollCart/EnrollCart';


const Course = () => {
    const [course, setCourse] = useState(fakeData);
    const [Enroll, setEnroll] = useState([]);
    const HandleBtn = (course) => {
        const newEnroll = [...Enroll, course]
        setEnroll(newEnroll);
    }
    return (
        <div>
            <div className="courseArea">

                <div className="courseSection">
                    <h1 id="Courses" >Our Special Courses ~</h1>
                    {
                        course.map(course => <CourseData HandleBtn={HandleBtn} course={course}></CourseData>)
                    }
                </div>

                <div className="EnrollCourse">
                    <EnrollCart Enroll={Enroll}></EnrollCart>
                </div>

            </div>
            <footer style={{padding: '10px', textAlign: 'center'}}>
                <h5>All rights reserved. Asif Ur Rahman</h5>
            </footer>
            </div>
    );
};

export default Course;