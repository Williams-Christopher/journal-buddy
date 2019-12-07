import React from 'react';

import ApiServices from '../../services/api-services';

import JournalListFilter from '../../components/JournalListFilter/JournalListFilter';
import JournalListItem from '../../components/JournalListItem/JournalListItem';
import './JournalEntryList.css';
import EntriesContext from '../../context/EntriesContext';

class JournalEntryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entriesError: null,
            entriesReceived: false,
            entries: [],
        }
    }

    componentDidMount() {
        ApiServices.getEntries()
            .then(entryList => {
                this.setState({entries: entryList});
            })
            .catch(error => this.setState({error: error.message}));
    };

    render() {
        const entriesContextValue = {
            entriesError: this.state.entriesError,
            entries: this.state.entries,
        }
        return (
            <EntriesContext.Provider value={entriesContextValue}>
                <section className='journal_entry_list'>
                    <h2>
                        Journal Entries
                    </h2>
                    <JournalListFilter />
                    <section className='journal_entries_list'>
                        {this.state.entries.map(entryData => <JournalListItem key={entryData.id} {...entryData} />)}
                    </section>
                </section>
            </EntriesContext.Provider>
        );
    };
};

export default JournalEntryList;
