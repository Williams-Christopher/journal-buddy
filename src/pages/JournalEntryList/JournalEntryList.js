import React from 'react';

import JournalListItem from '../../components/JournalListItem/JournalListItem';
import './JournalEntryList.css';

class JournalEntryList extends React.Component {
    render() {
        return (
            <section class="journal_entries">
            <h2>
                Journal Entries
            </h2>
            <section class="journal_entries_sorting">
                <label for="list_sort">Sort entries: </label>
                <select name="list_sort" id="list_sort">
                    <option value="dateasc">Date - Recent first</option>
                    <option value="datedesc">Date - Oldest first</option>
                    <option value="feelasc">Feeling - Ascending</option>
                    <option value="feeldesc">Feeling - Descending</option>
                </select>
                <label for="list_privacy">Privacy: </label>
                <select name="list_privacy" id="list_privacy">
                    <option value="all" selected>All</option>
                    <option value="private">Private</option>
                    <option value="public">Public</option>
                </select>
            </section>
            <section class="journal_entries_list">
                {this.props.entries.map(entryData => <JournalListItem {...entryData} />)}
            </section>
        </section>
        );
    };
};

export default JournalEntryList;
