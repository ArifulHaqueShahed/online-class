import React from 'react';
import fakeData from '../../fakeData/courseInformation';
import { useState } from 'react';
import './Courses.css';
import Subject from '../subject/Subject';
import Cart from '../Cart/Cart';

const Courses = () => {
    
    const allCourse = fakeData;
    const [courses, setCourses] = useState(allCourse);
    const [cart, setCart] = useState([])
    
    const handleAddSubject = (subject) => {
        console.log('subject added button clicked', subject);
        const newCart = [...cart, subject];
        setCart(newCart);
    }

    return (
        <div className="course-container">
                 <div className="subject-container row">
                    {
                        courses.map(subject => <Subject className="col-md-6 m-6" handleAddSubject={handleAddSubject} subject={subject}></Subject>)
                    }
                </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Courses;