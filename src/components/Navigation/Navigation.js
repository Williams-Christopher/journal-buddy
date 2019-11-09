import React from 'react';
import './Navigation.css';

class Navigation extends React.Component {
    render() {
        return (
            <nav className='top_nav'>
                <h1 className='top_nav_title'>Journal Buddy</h1>
                <ul className='top_nav_links'>
                    <li>About</li>
                    <li>Create Entry</li>
                    <li>List</li>
                    <li>Reports</li>
                    <li>Login/out</li>
                </ul>
            </nav>
        );
    };
};

export default Navigation;
