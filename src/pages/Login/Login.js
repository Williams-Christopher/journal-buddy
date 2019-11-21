import React from 'react';
import { Link } from 'react-router-dom';

import './Login.css';

class Login extends React.Component {
    render() {
        return (
            <section className='login'>
                <h2>Sign-in to Journal Buddy</h2>
                <em>Need an <Link className='common_link' to='/Register'>account</Link>? Want to <Link className='common_link' to='/About'>know more</Link>?</em>
                <form className='common_form login_form'>
                    <label htmlFor='login_email'>Email </label>
                    <input type='text' name='login_email' id='login_email' required />

                    <label htmlFor='login_password'>Password </label>
                    <input type='password' name='login_password' id='login_password' required />
                </form>
                <button className='common_button'>Login</button>
            </section>
        );
    };
};

export default Login;
