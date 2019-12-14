import React from 'react';
import { Link } from 'react-router-dom';

import ApiServices from '../../services/api-services';
import TokenServices from '../../services/token-services';
import AppContext from '../../context/AppContext';

import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {error: null};
        this.login_user = React.createRef();
        this.login_password = React.createRef();
    };

    static contextType = AppContext;

    redirectOnLoginSuccess = () => {
        this.context.setLoginState();
        this.props.history.push('/MyEntries');
    };

    handleLoginRequest = event => {
        event.preventDefault();
        this.setState({error: null});
 
        const loginUser = {
            user_name: this.login_user.current.value,
            password: this.login_password.current.value,
        };

        this.login_user.current.value = '';
        this.login_password.current.value = '';

        ApiServices.postLogin(loginUser)
            .then(token => {
                TokenServices.insertToken(token.authToken);
                this.redirectOnLoginSuccess();
            })
            .catch(error => {
                this.setState({error: true})
            });
    };

    render() {
        return (
            <section className='login'>
                <h2>Sign-in to Journal Buddy</h2>
                <em>Need an <Link className='common_link' to='/Register'>account</Link>? Want to <Link className='common_link' to='/About'>know more</Link>?</em>
                <div role='alert'>
                    {this.state.error && <p className='common_error'>There was a problem signing you in. Please check your entries and try again.</p>}
                </div>
                <form className='common_form login_form' onSubmit={this.handleLoginRequest}>
                    <label htmlFor='login_user'>Username </label>
                    <input type='text' name='login_user' id='login_user' ref={this.login_user} required />

                    <label htmlFor='login_password'>Password </label>
                    <input type='password' name='login_password' id='login_password' ref={this.login_password} required />
                    <button className='common_button' type='submit'>Login</button>
                </form>
                <p>For a demonstration, use pstickings0 with password01</p>
            </section>
        );
    };
};

export default Login;
