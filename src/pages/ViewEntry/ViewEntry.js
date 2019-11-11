import React from 'react';

import { getFormattedEntryTitle, getStringForFeelingValue, getStringForPrivacyValue } from '../../helpers/Helpers';
import './ViewEntry.css';

class ViewEntry extends React.Component {
    getEntry(targetEntryId) {
        return this.props.entries.filter(entry => entry.entry_id == targetEntryId)
    };

    entryFound(entry) {
        return (
            <section className='view_entry'>
                <h2>
                    View Journal Entry
                </h2>
                <button className='common_button'>Copy permalink</button>
                <button className='common_button'>Back to list</button>
                <p className='view_entry_date'>
                    { getFormattedEntryTitle(entry.entry_title, entry.entry_date) }
                </p>
                <p className='view_entry_feeling'>
                    I was feeling: { getStringForFeelingValue(entry.entry_feeling) } - Privacy: { getStringForPrivacyValue(entry.entry_privacy) }
                </p>
                <article className='view_entry_body'>
                    { entry.entry_body }
                </article>
            </section>
        );
    };

    entryNotFound() {
        return (
            <section className='view_entry'>
                <h2>
                    No matching entry found
                </h2>
            </section>
        );
    };

    render() {
        const { entry_id } = this.props.match.params;
        const entry = this.getEntry(entry_id)[0];

        if (entry.length === 0) {
            return (this.entryNotFound())
        } else {
            return (this.entryFound(entry))
        }
    };
};

export default ViewEntry;
