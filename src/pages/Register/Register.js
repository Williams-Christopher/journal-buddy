import React from 'react';
import { Link } from 'react-router-dom';

import ApiServices from '../../services/api-services';

import './Register.css';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            userName: null,
            password: null,
            passwordVerify: null,
            name: null,
            email: null,
            validUserName: false,
            validEmail: false,
            validPassword: false,
            passwordsMatch: false,
            validName: false,
        };
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            error: null,
        });
        const newUser = {
            first_name: this.state.name,
            user_name: this.state.userName,
            password: this.state.password,
            email: this.state.email,
        };

        ApiServices.postUser(newUser)
            .then(result => this.props.history.push('/Login'))
            .catch(error => this.setState({error: error.error}));
    };

    userNameChanged = (e) => {
        const tempUserName = e.target.value;
        let isTempUserNameValid = tempUserName.length >= 3 && tempUserName.length <= 15;

        this.setState({
            userName: tempUserName,
            validUserName: isTempUserNameValid,
        });
    };

    emailChanged = (e) => {
        const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        const tempEmail = e.target.value;
        let isEmailValid = EMAIL_REGEX.test(tempEmail);

        this.setState({
            email: tempEmail,
            validEmail: isEmailValid,
        });
    };

    firstNameChanged = (e) => {
        const tempName = e.target.value;
        let isTempNameValid = false;

        if(tempName.length >= 1 && tempName.length <= 20) {
            isTempNameValid = true;
        };

        this.setState({
            name: tempName,
            validName: isTempNameValid,
        });
    };

    checkPasswordEntry = (password) => {
        const PASSWORD_REGEX = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])(?=.{8,})[\S]+/;
        return PASSWORD_REGEX.test(password);
    };

    checkPasswordsMatch = () => {
        this.setState({
            passwordsMatch: this.state.password === this.state.passwordVerify,
        });
    };

    passwordChanged = (e) => {
        const tempPassword = e.target.value;
        const isPasswordValid = this.checkPasswordEntry(tempPassword);

        this.setState({
            password: tempPassword,
            validPassword: isPasswordValid,
        }, () => this.checkPasswordsMatch());
    };

    passwordVerifyChanged = (e) => {
        const tempPasswordVerify = e.target.value;
        this.setState({
            passwordVerify: tempPasswordVerify,
        }, () => this.checkPasswordsMatch());
    };

    render() {
        return (
            <section className='register'>
                <h2>Sign up for Journal Buddy</h2>
                <form className='common_form register_form' onSubmit={this.handleSubmit}>
                    {this.state.error && <p className='common_error'>{this.state.error}</p>}

                    <label htmlFor='user_name'>User name </label>
                    <input type='text' name='user_name' id='user_name' className={'active_anim'}onChange={(e) => this.userNameChanged(e)} required />
                    {!this.state.validUserName && <p className='common_form helper_text'>Used to log in and should be 3 to 15 characters</p>}

                    <label htmlFor='email'>Email </label>
                    <input type='text' name='email' id='email' onChange={(e) => this.emailChanged(e)} required />
                    {!this.state.validEmail && <p className='common_form helper_text'>Email should be in the format user@domain.tld. It will not be shared or sold</p>}

                    <label htmlFor='first_name'>Name </label>
                    <input type='text' name='first_name' id='first_name' onChange={(e) => this.firstNameChanged(e)} required />
                    {!this.state.validName && <p className='common_form helper_text'>How Journal Buddy refers to you - 1 to 20 characters here</p>}

                    <label htmlFor='login_password'>Password </label>
                    <input type='password' name='login_password' id='login_password' onChange={(e) => this.passwordChanged(e)} required />
                    {!this.state.validPassword && <p className='common_form helper_text'>8 to 20 upper and lower characters, one number, one special character</p>}

                    <label htmlFor='login_password_verify'>Verify password</label>
                    <input type='password' name='login_password_verify' id='login_password_verify' onChange={(e) => this.passwordVerifyChanged(e)} required />
                    {!this.state.passwordsMatch && <p className='common_form helper_text'>Passwords must match</p>}

                    <button className='common_button' type='submit'>Signup</button>
                </form>
                <p>Already have an account? <Link className='common_link' to='/Login'>Login</Link></p>
            </section>
        );
    };
};

export default Register;
