import React from 'react';

import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <p>Created in Austin, TX by Christopher Williams</p>
                <p>Have a question or need help? <a href='mailto:JournalBuddy@chriswillia.ms'>Send us an email</a>!</p>
            </footer>
        );
    };
};

export default Footer;
