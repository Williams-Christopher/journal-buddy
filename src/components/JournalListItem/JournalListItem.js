import React from 'react';
import { Link } from 'react-router-dom';

import { getShortFormattedEntryTitle, getStringForPrivacyValue, getStringForUTCDate } from '../../helpers/Helpers';
import './JournalListItem.css';

class JournalListItem extends React.Component {
    render() {
        const pathString = `/View/${this.props.entry_id}`;

        return (
            <section className='journal_list_item'>
                <h2>
                    <Link className='common_link' to={pathString}>
                        {getShortFormattedEntryTitle(this.props.entry_title)}
                    </Link>
                </h2>
                <h3>{getStringForUTCDate(this.props.entry_date)}</h3>
                <p>Feeling: {this.props.entry_feeling}</p>
                <p>Privacy: {getStringForPrivacyValue(this.props.entry_privacy)}</p>
                <p>Preview: {this.props.entry_body}</p>
            </section>
        );
    };
};

export default JournalListItem;
