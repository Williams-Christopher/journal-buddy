import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Navigation extends React.Component {
    render() {
        return (
            <nav className='top_nav'>
                <h1 className='top_nav_title'>
                    <Link className='generic_link top_nav_link' to='/'>
                        Journal Buddy
                    </Link>
                </h1>
                <ul className='top_nav_links'>
                    <li className='top_nav_item'>
                        <Link className='generic_link top_nav_link' to='/'>
                            About
                        </Link>
                    </li>
                    <li className='generic_link top_nav_item'>Create Entry</li>
                    <li className='generic_link top_nav_item'>List</li>
                    <li className='generic_link top_nav_item'>Reports</li>
                    <li className='generic_link top_nav_item'>Login/out</li>
                </ul>
            </nav>
        );
    };
};

export default Navigation;
