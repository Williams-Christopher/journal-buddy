import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Navigation extends React.Component {
    render() {
        return (
            <nav className='top_nav'>
                <h1 className='top_nav_title'>Journal Buddy</h1>
                <ul className='top_nav_links'>
                    <li className='top_nav_link'>About</li>
                    <li className='top_nav_link'>Create Entry</li>
                    <li className='top_nav_link'>List</li>
                    <li className='top_nav_link'>Reports</li>
                    <li className='top_nav_link'>Login/out</li>
                </ul>
            </nav>
        );
    };
};

export default Navigation;
