import React from 'react';
import { Link } from 'react-router-dom';

import './JournalListItem.css';

class JournalListItem extends React.Component {
    render() {
        const pathString = `/View/${this.props.entry_id}`;

        return (
            <section className='journal_list_item'>
                <h2>
                    <Link className='common_link' to={pathString}>
                        {this.props.entry_title || 'Untitled Entry'}
                    </Link>
                </h2>
                <h3>{this.props.entry_date}</h3>
                <p>Feeling: {this.props.entry_feeling}</p>
                <p>Privacy: {this.props.entry_privacy === 0 ? 'Private' : 'Public'}</p>
                <p>Preview: {this.props.entry_body}</p>
            </section>
        );
    };
};

export default JournalListItem;
