import React from 'react';
import { Link } from 'react-router-dom';

import './Register.css';

class Register extends React.Component {
    render() {
        return (
            <section className='register'>
                <h2>Sign up for Journal Buddy</h2>
                <em>Thanks for signing up for Journal Buddy!</em>
                <form className='common_form register_form'>
                    <label htmlFor='login_email'>Email </label>
                    <input type='text' name='login_email' id='login_email' required />

                    <label htmlFor='login_password'>Password </label>
                    <input type='password' name='login_password' id='login_password' required />

                    <label htmlFor='login_password_verify'>Verify password</label>
                    <input type='password' name='login_password_verify' id='login_password_verify' />
                </form>
                <button className='common_button'>Signup</button>
                Already have an account? <Link to='/Login'>Login</Link>
            </section>
        );
    };
};

export default Register;
