import React from 'react';

import './CreateEntry.css';

class CreateEntry extends React.Component {
    render() {
        return (
            <section>
                <h2>
                    New Entry
                </h2>
                <form className='entry_form common_form'>
                    <label htmlFor='entry_form_emotion_option'>I'm feeling:</label>
                    <select name='entry_emotion_option' id='entry_form_emotion_option'>
                        <option value='5'>5 - Very happy</option>
                        <option value='4'>4 - Happy</option>
                        <option value='3'>3 - Normal / Even</option>
                        <option value='2'>2 - Down</option>
                        <option value='1'>1 - Very down</option>
                    </select>

                    <label htmlFor='entry_form_title'>Entry title (optional):</label>
                    <input type='text' name='entry_form_title' id='entry_form_title' placeholder='Untitled Entry' />

                    <label htmlFor='entry_form_body'>Entry:</label>
                    <textarea rows='10' cols='50' id='entry_form_body'>
                    </textarea>

                    <label htmlFor='entry_form_privacy'>Privacy:</label>
                    <select name='entry_form_privacy' id='entry_form_privacy'>
                        <option value='0'>Private</option>
                        <option value='1'>Public</option>
                    </select>

                </form>
                <button className='common_button' type='submit'>Submit Entry</button>
            </section>
        );
    };
};

export default CreateEntry;
