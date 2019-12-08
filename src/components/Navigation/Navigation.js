import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import TokenServices from '../../services/token-services';

import './Navigation.css';

class Navigation extends React.Component {
    static contextType = AppContext;

    handleLogout = () => {
        TokenServices.removeToken();
        this.context.setLoginState();
        this.props.history.push('/');
    }

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
                    {!this.context.isLoggedIn ? null :
                        <>
                            <li className='top_nav_item'>
                                <Link className='common_link top_nav_link' to='/Create'>
                                    Create Entry
                                </Link>
                            </li>
                            <li className='top_nav_item'>
                                <Link className='common_link top_nav_link' to='/List'>
                                    List
                                </Link>
                            </li>
                            <li className='top_nav_item'>
                                <Link className='common_link top_nav_link' to='/Reports'>
                                    Reports
                                </Link>
                            </li>
                            <li className='top_nav_item'>
                                <Link className='common_link top_nav_link' onClick={this.handleLogout}>
                                    Logout
                                </Link>
                            </li>
                        </>
                    }
                    {!this.context.isLoggedIn ?
                        <>
                            <li className='top_nav_item'>
                                <Link className='common_link top_nav_link' to='/Register'>
                                    Register
                                </Link>
                            </li>
                            <li className='top_nav_item'>
                                <Link className='common_link top_nav_link' to='/Login'>
                                    Login
                                </Link>
                            </li>
                        </>
                    : null
    }
                </ul>
            </nav>
        );
    };
};

export default withRouter(Navigation);
