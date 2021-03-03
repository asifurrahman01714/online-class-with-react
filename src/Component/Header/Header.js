import React from 'react';
import banner from '../../image/Illustration.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFighter } from '@fortawesome/free-solid-svg-icons';



const Header = () => {
    return (
            <div className="HeaderSection">
                <div className="header">
                    <input type="text" placeholder="Search Course" />
                    <button className='searchBtn'>Search   <FontAwesomeIcon icon={faSearch} /></button>

                    <nav>
                        <a href="#Courses">Courses</a>
                        <a href="#Enroll">Enroll</a>
                        <a href="https://www.facebook.com/don.israfil.9">Contact Us</a>
                        <a href="https://www.facebook.com/don.israfil.9">About us</a>
                        <a href="https://www.facebook.com/don.israfil.9">Help</a>
                    </nav>
                </div>
                <figure>
                    <img src={banner} alt="" />
                </figure>
            </div>
    );
};

export default Header;