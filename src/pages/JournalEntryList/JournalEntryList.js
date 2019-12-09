import React from 'react';

import ApiServices from '../../services/api-services';
import JournalListFilter from '../../components/JournalListFilter/JournalListFilter';
import JournalListItem from '../../components/JournalListItem/JournalListItem';
import EntriesContext from '../../context/EntriesContext';

import { filterPrivacyAll, filterPrivacy, sortDateAscending, sortDateDescending } from '../../helpers/Helpers';
import './JournalEntryList.css';

class JournalEntryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entriesError: null,
            entriesReceived: false,
            entries: [],
            processedEntries: [],
            sortValueDate: 'datedesc',
            filterValuePrivacy: 'all',
        };
    };

    componentDidMount() {
        ApiServices.getEntries()
            .then(entryList => {
                this.setState({
                    entries: entryList,
                    processedEntries: entryList
                }, () => this.processEntries());

            })
            .catch(error => this.setState({ error: error.message }));
    };

    setPrivacyFilter = (filterValue) => {
        filterValue = isNaN(filterValue) ? filterValue : parseInt(filterValue);
        this.setState(
            { filterValuePrivacy: filterValue },
            () => this.processEntries()
        );
    };

    setDateSort = (sortValue) => {
        this.setState(
            { sortValueDate: sortValue },
            () => this.processEntries()
        );
    };

    processEntries = () => {
        let sortedEntries = this.sortEntriesByDate();
        let filteredEntries = this.filterEntriesOnPrivacy(sortedEntries);

        this.setState({
            processedEntries: filteredEntries,
        });
    }

    sortEntriesByDate = () => {
        let sortedEntries = [];
        if (this.state.sortValueDate === 'datedesc') {
            sortedEntries = sortDateDescending(this.state.entries);
        } else if (this.state.sortValueDate === 'dateasc') {
            sortedEntries = sortDateAscending(this.state.entries);
        };

        return sortedEntries;
    };

    filterEntriesOnPrivacy = (entries) => {
        let filteredEntries = [];

        if (this.state.filterValuePrivacy === 'all') {
            filteredEntries = filterPrivacyAll(entries);
        } else if (this.state.filterValuePrivacy === 0 || this.state.filterValuePrivacy === 1) {
            filteredEntries = filterPrivacy(entries, this.state.filterValuePrivacy);
        }

        return filteredEntries;
    };

    render() {
        const entriesContextValue = {
            entriesError: this.state.entriesError,
            entries: this.state.entries,
            sortValueDate: this.state.sortValueDate,
            filterValuePrivacy: this.state.privacyFilter,
            filterOnPrivacy: this.setPrivacyFilter,
            sortOnDate: this.setDateSort,
        };
        if (this.state.error) {
            return (<p className='common_error'>{this.state.error}</p>);
        } else {
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
};

export default JournalEntryList;
