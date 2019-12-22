import React from 'react';

import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <p>Created in Austin, TX by <a className='common_link' href='https://www.linkedin.com/in/williams-christopher/' rel='_noopener' target='blank'>Christopher Williams</a></p>
                <p>Have a question or need help? <a className='common_link' href='mailto:JournalBuddy@chriswillia.ms'>Send us an email</a>!</p>
            </footer>
        );
    };
};

export default Footer;
