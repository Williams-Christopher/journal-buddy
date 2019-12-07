import React from 'react';

import ApiServices from '../../services/api-services';
import JournalListFilter from '../../components/JournalListFilter/JournalListFilter';
import JournalListItem from '../../components/JournalListItem/JournalListItem';
import EntriesContext from '../../context/EntriesContext';

import {filterPrivacyAll, filterPrivacy} from '../../helpers/Helpers';
import './JournalEntryList.css';

class JournalEntryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entriesError: null,
            entriesReceived: false,
            entries: [],
            processedEntries: [],
            entrySort: 'dateasc',
            privacyFilter: 'all',
        }
    }

    componentDidMount() {
        ApiServices.getEntries()
            .then(entryList => {
                this.setState({
                    entries: entryList,
                    processedEntries: entryList
                });
            })
            .catch(error => this.setState({error: error.message}));
    };

    filterEntryListOnPrivacy = (filterValue) => {
        let tempEntries = [];
        filterValue = isNaN(filterValue) ? filterValue : parseInt(filterValue);
        this.setState({privacyFilter: filterValue})

        if(filterValue === 'all') {
            tempEntries = filterPrivacyAll(this.state.entries);
        } else if (filterValue === 0 || filterValue === 1) {
            tempEntries = filterPrivacy(this.state.entries, filterValue);
        }
        this.setState({processedEntries: tempEntries});
    };

    render() {
        const entriesContextValue = {
            entriesError: this.state.entriesError,
            entries: this.state.processedEntries,
            entrySort: this.state.entrySort,
            privacyFilter: this.state.privacyFilter,
            filterOnPrivacy: this.filterEntryListOnPrivacy,
        };

        return (
            <EntriesContext.Provider value={entriesContextValue}>
                <section className='journal_entry_list'>
                    <h2>
                        Journal Entries
                    </h2>
                    <JournalListFilter />
                    <section className='journal_entries_list'>
                        {this.state.processedEntries.map(entryData => <JournalListItem key={entryData.id} {...entryData} />)}
                    </section>
                </section>
            </EntriesContext.Provider>
        );
    };
};

export default JournalEntryList;
