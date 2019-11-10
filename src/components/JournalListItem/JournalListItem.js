import React from 'react';

import './JournalListItem.css';

class JournalListItem extends React.Component {
    render() {
        console.log(this.props)
        return (
            <section class="journal_list_item">
                <h2>{this.props.entry_title || 'Untitled Entry'}</h2>
                <h3>{this.props.entry_date}</h3>
                <p>Feeling: {this.props.entry_feeling}</p>
                <p>Privacy: {this.props.entry_privacy === 0 ? 'Private' : 'Public'}</p>
                <p>Preview: {this.props.entry_body}</p>
            </section>
        );
    };
};

export default JournalListItem;
