import React from 'react';
import { Link } from 'react-router-dom';

import {
    getShortFormattedEntryTitle,
    getStringForPrivacyValue,
    getStringForUTCDate,
    getStringForFeelingValue,
    getPreviewString,
} from '../../helpers/Helpers';
import './JournalListItem.css';

class JournalListItem extends React.Component {
    render() {
        const pathString = `/View/${this.props.entry_id}`;

        return (
            <section className='journal_list_item'>
                <h2>
                    <Link className='common_link' to={pathString}>
                        {getShortFormattedEntryTitle(this.props.title)}
                    </Link>
                </h2>
                <h3>{getStringForUTCDate(this.props.created)}</h3>
                <p>Feeling: {getStringForFeelingValue(this.props.feeling)}</p>
                <p>Privacy: {getStringForPrivacyValue(this.props.privacy)}</p>
                <p>Preview: {getPreviewString(this.props.body, 45)}</p>
            </section>
        );
    };
};

export default JournalListItem;
