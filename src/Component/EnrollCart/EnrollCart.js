import React from 'react';
import './EnrollCart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell} from '@fortawesome/free-solid-svg-icons';

const EnrollCart = (props) => {
    const Enroll = props.Enroll;
    const total = Enroll.reduce((total, course) => total + course.Coursefree, 0);
    return (
        <div className="enroll_cart_section">
            <h2 className="enrollStyle">Enroll Summary ~</h2>
            <h3 className="h3">Enrolled Course : <FontAwesomeIcon icon={faBell} />{Enroll.length}</h3>
            {
                Enroll.map(course => <li type="1">Name: {course.CourseName}</li>)
            }
            {
                Enroll.map(course => <li>fee: {course.Coursefree} Tk</li>)
            }
            <h3>Total Fee: {total} Tk</h3>
        </div>
    );
};

export default EnrollCart;