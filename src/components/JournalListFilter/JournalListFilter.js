import React from 'react';

import './JournalListFilter.css';

class JournalListFilter extends React.Component {
    render() {
        return(
            <section className='journal_entry_filter'>
                <fieldset>
                <label htmlFor='list_sort'>Sort entries: </label>
                <select name='list_sort' id='list_sort'>
                    <option value='dateasc'>Date - Recent first</option>
                    <option value='datedesc'>Date - Oldest first</option>
                    <option value='feelasc'>Feeling - Ascending</option>
                    <option value='feeldesc'>Feeling - Descending</option>
                </select>
                </fieldset>
                <fieldset>
                <label htmlFor='list_privacy'>Privacy: </label>
                <select name='list_privacy' id='list_privacy'>
                    <option value='all' defaultValue>All</option>
                    <option value='private'>Private</option>
                    <option value='public'>Public</option>
                </select>
                </fieldset>
            </section>
        );
    };
};

export default JournalListFilter
