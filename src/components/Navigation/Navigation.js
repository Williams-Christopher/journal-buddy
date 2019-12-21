import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import TokenServices from '../../services/token-services';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Navigation.css';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuDisplayed: true,
            menuOpen: false,
        };
    };

    static contextType = AppContext;

    componentDidMount() {
        this.handleDimensionChange();
        window.addEventListener('resize', this.handleDimensionChange);
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleDimensionChange);
    };

    handleDimensionChange = () => {
        if(window.innerWidth >= 750) {
            this.setState({menuOpen: true});
        } else {
            this.setState({menuOpen: false});
        };
    };

    handleLogout = () => {
        TokenServices.removeToken();
        this.context.setLoginState();
        this.props.history.push('/');
    };

    handleMenuToggle = () => {
        this.setState({ menuOpen: !this.state.menuOpen });
    };

    render() {
        return (
            <nav className='top_nav'>
                <h1 className='top_nav_title'>
                    <Link className='common_link top_nav_link' to='/'>
                        <FontAwesomeIcon icon={'book'} />
                        {' '}
                        Journal Buddy
                    </Link>
                    <FontAwesomeIcon icon={'bars'} className={'top_nav_burger'} onClick={e => this.handleMenuToggle(e)} />
                </h1>
                {!this.state.menuOpen ?
                    null
                    :
                    <ul className='top_nav_links' id='top_nav_links'>
                        <li className='top_nav_item' onClick={() => this.handleMenuToggle()}>
                            <Link className='common_link top_nav_link' to='/'>
                                About
                        </Link>
                        </li>
                        {!this.context.isLoggedIn ? null :
                            <>
                                <li className='top_nav_item' onClick={() => this.handleMenuToggle()}>
                                    <Link className='common_link top_nav_link' to='/Create'>
                                        Create Entry
                                </Link>
                                </li>
                                <li className='top_nav_item' onClick={() => this.handleMenuToggle()}>
                                    <Link className='common_link top_nav_link' to='/MyEntries'>
                                        My Entries
                                </Link>
                                </li>
                                <li className='top_nav_item' onClick={() => this.handleMenuToggle()}>
                                    <Link className='common_link top_nav_link' to='/Metrics'>
                                        Metrics
                                </Link>
                                </li>
                                <li className='top_nav_item' onClick={() => this.handleMenuToggle()}>
                                    <Link className='common_link top_nav_link' onClick={this.handleLogout}>
                                        Logout
                                </Link>
                                </li>
                            </>
                        }
                        {!this.context.isLoggedIn ?
                            <>
                                <li className='top_nav_item' onClick={() => this.handleMenuToggle()}>
                                    <Link className='common_link top_nav_link' to='/Register'>
                                        Register
                                </Link>
                                </li>
                                <li className='top_nav_item' onClick={() => this.handleMenuToggle()}>
                                    <Link className='common_link top_nav_link' to='/Login'>
                                        Login
                                </Link>
                                </li>
                            </>
                            : null
                        }
                    </ul>
                }
            </nav>
        );
    };
};

export default withRouter(Navigation);
