import React from 'react';

import JournalListFilter from '../../components/JournalListFilter/JournalListFilter';
import JournalListItem from '../../components/JournalListItem/JournalListItem';
import './JournalEntryList.css';

class JournalEntryList extends React.Component {
    render() {
        return (
            <section className='journal_entry_list'>
            <h2>
                Journal Entries
            </h2>
            <JournalListFilter />
            <section className='journal_entries_list'>
                {this.props.entries.map(entryData => <JournalListItem key={entryData.entry_id} {...entryData} />)}
            </section>
        </section>
        );
    };
};

export default JournalEntryList;
