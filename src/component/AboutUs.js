import React from 'react';
import {useNavigate, Link, Outlet } from 'react-router-dom';

const AboutUs = () => {
     const navigate = useNavigate();
    
    const clickHandler = () => {
     navigate('/' , {replace: true})
}

    return (
        <div>
            <h1>AboutUs</h1>
            <ul>
                <li><Link to="programmers">Programmers</Link></li>
                <li><Link to="drivers">Drivers</Link></li>
            </ul>
            <button onClick={clickHandler}>Go Home</button>
            <Outlet />
        </div>
    );
};

export default AboutUs;