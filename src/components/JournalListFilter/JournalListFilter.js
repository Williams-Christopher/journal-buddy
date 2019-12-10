import React from 'react';

import EntriesContext from '../../context/EntriesContext';
import './JournalListFilter.css';

class JournalListFilter extends React.Component {
    static contextType = EntriesContext;

    handlePrivacyFilterChange = e => {
        console.log(e.target.value)
        this.context.filterOnPrivacy(e.target.value);
    };

    handleSortChange = e => {
        console.log(e.target.value);
        this.context.sortOnDate(e.target.value);
    };

    render() {
        return (
            <section className='journal_entry_filter'>
                <fieldset>
                    <label htmlFor='list_sort'>Sort entries: </label>
                    <select name='list_sort' id='list_sort' onChange={(event) => this.handleSortChange(event)}>
                        <option value='datedesc' defaultValue>Date - Recent first</option>
                        <option value='dateasc'>Date - Oldest first</option>
                        {/* <option value='feelasc'>Feeling - Ascending</option>
                        <option value='feeldesc'>Feeling - Descending</option> */}
                    </select>
                </fieldset>
                <fieldset>
                    <label htmlFor='list_privacy'>Privacy: </label>
                    <select name='list_privacy' id='list_privacy' onChange={(event) => this.handlePrivacyFilterChange(event)}>
                        <option value='all' defaultValue>All</option>
                        <option value='0'>Private</option>
                        <option value='1'>Public</option>
                    </select>
                </fieldset>
            </section>
        );
    };
};

export default JournalListFilter
