import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Navigation extends React.Component {
    render() {
        return (
            <nav className='top_nav'>
                <h1 className='top_nav_title'>
                    <Link className='common_link top_nav_link' to='/'>
                        Journal Buddy
                    </Link>
                </h1>
                <ul className='top_nav_links'>
                    <li className='top_nav_item'>
                        <Link className='common_link top_nav_link' to='/'>
                            About
                        </Link>
                    </li>
                    <li className='common_link top_nav_item'>
                        <Link className='common_link top_nav_link' to='/Create'>
                            Create Entry
                        </Link>
                    </li>
                    <li className='common_link top_nav_item'>
                        <Link className='common_link top_nav_link' to='/List'>
                            List
                        </Link>
                    </li>
                    <li className='common_link top_nav_item'>
                        <Link className='common_link top_nav_link' to='/Reports'>
                            Reports
                        </Link>
                    </li>
                    <li className='common_link top_nav_item'>
                        <Link className='common_link top_nav_link' to='/Login'>
                            Login
                        </Link>
                    </li>
                    <li className='common_link top_nav_item'>
                        <Link className='common_link top_nav_link' to='/Logout'>
                            Logout
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    };
};

export default Navigation;
