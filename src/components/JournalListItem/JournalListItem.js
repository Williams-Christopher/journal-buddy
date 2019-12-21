import React from 'react';
import { withRouter, Link  } from 'react-router-dom';

import {
    getShortFormattedEntryTitle,
    getStringForPrivacyValue,
    getStringForUTCDate,
    getStringForFeelingValue,
    getPreviewString,
} from '../../helpers/Helpers';
import './JournalListItem.css';

class JournalListItem extends React.Component {
    constructor(props) {
        super(props);
        this.pathString = `/View/${this.props.entry_id}`;
    }


    handleViewButtonClick = () => {
        this.props.history.push(this.pathString)
    };

    render() {
        return (
            <article className='journal_list_item'>
                <h2>
                    <Link className='common_link' to={this.pathString}>
                        {getShortFormattedEntryTitle(this.props.title)}
                    </Link>
                </h2>
                <h3>{getStringForUTCDate(this.props.created)}</h3>
                <p>Feeling: {getStringForFeelingValue(this.props.feeling)}</p>
                <p>Privacy: {getStringForPrivacyValue(this.props.privacy)}</p>
                <p>Preview: {getPreviewString(this.props.body, 100)}</p>
                <div className='common_button_container'>
                    <button className='common_button' onClick={e => this.handleViewButtonClick(e)}>View Entry</button>
                </div>
            </article>
        );
    };
};

export default withRouter(JournalListItem);
