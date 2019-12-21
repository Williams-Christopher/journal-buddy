import React from 'react';
import {withRouter} from 'react-router-dom';

import ApiServices from '../../services/api-services';

import './CreateEntry.css';
import { faHourglassEnd } from '@fortawesome/free-solid-svg-icons';

class CreateEntry extends React.Component {
    constructor(props) {
        super(props);
        this.feelingValue = React.createRef();
        this.titleValue = React.createRef();
        this.bodyValue = React.createRef();
        this.privacyValue = React.createRef();

        this.state = {
            error: null,
            requestActive: false,
            displayedPrivacyNotice: false,
            entry: {
                feeling: null,
                title: null,
                body: null,
                privacy: null,
            },
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            error: null,
            requestActive: true,
        });

        if(!this.bodyValue.current.value) {
            this.setState({error: 'Your journal entry can not be empty.'});
            return;
        }

        const newEntry = {
            feeling: this.feelingValue.current.value,
            title: this.titleValue.current.value,
            body: this.bodyValue.current.value,
            privacy: this.privacyValue.current.value,
        };

        ApiServices.postEntry(newEntry)
            .then(result => {
                if(!result.ok) {
                    throw new Error('new Error!!!!!');
                }
                this.redirectOnSubmitSuccess();
            })
            .catch(error => this.setState({
                error: error.message,
                requestActive: false,
            }));
    };

    redirectOnSubmitSuccess = () => {
        this.props.history.push('/MyEntries');
    };

    handleBackButton = (e) => {
        e.preventDefault();
        this.props.history.push('/MyEntries');
    };

    handlePrivacyOptionChange = (e) => {
        if (e.target.value === '1' && this.state.displayedPrivacyNotice === false) {
            this.setState({displayedPrivacyNotice: true});
            alert('Public entries can be viewed by anyone with the entry id. Only use this setting if you intend to share your entry.');
        };
    };

    render() {
        return (
            <section>
                <h2>
                    New Entry
                </h2>
                {this.state.error && <p className='common_error'>{this.state.error}</p>}
                <form className='entry_form common_form' onSubmit={this.handleSubmit}>
                    <div className='select_flex_group'>
                        <div className={'select_set'}>
                            <label htmlFor='entry_form_emotion_option'>I'm feeling:</label>
                            <select name='entry_emotion_option' id='entry_form_emotion_option' ref={this.feelingValue}>
                                <option value='5'>5 - Very happy</option>
                                <option value='4'>4 - Happy</option>
                                <option value='3'>3 - Normal / Even</option>
                                <option value='2'>2 - Down</option>
                                <option value='1'>1 - Very down</option>
                            </select>
                        </div>
                        <div className={'select_set'}>
                            <label htmlFor='entry_form_privacy'>Privacy:</label>
                            <select name='entry_form_privacy' id='entry_form_privacy' ref={this.privacyValue} onChange={(event) => this.handlePrivacyOptionChange(event)}>
                                <option value='0'>Private</option>
                                <option value='1'>Public</option>
                            </select>
                        </div>
                    </div>

                    <label htmlFor='entry_form_title'>Entry title (optional):</label>
                    <input type='text' name='entry_form_title' id='entry_form_title' ref={this.titleValue} placeholder='Untitled Entry' />

                    <label htmlFor='entry_form_body'>Entry:</label>
                    <textarea rows='10' cols='50' id='entry_form_body' ref={this.bodyValue}>
                    </textarea>

                    <div className='common_button_container'>
                        <button className='common_button' onClick={e => this.handleBackButton(e)}>Back to List</button>
                        { this.state.requestActive ?
                            <div className='login_spinner'></div>
                            :
                            <button className='common_button' type='submit'>Submit Entry</button>
                        }
                    </div>
                </form>
            </section>
        );
    };
};

export default withRouter(CreateEntry);
