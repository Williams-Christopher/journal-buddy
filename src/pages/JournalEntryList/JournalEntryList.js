import React from 'react';

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
                <section class="journal_entries_thumbnail">
                    <h2>Untitled Entry</h2>
                    <h3>Thursday, October 31, 2019</h3>
                    <p>Feeling: 3 - Even / Normal</p>
                    <p>Privacy: Private</p>
                    <p>Preview: This would represent a preview of the journal entry. I'm thinking the first 320-ish
                        characters would be displayed before an elipsis would appended to shwo that there is more. of
                        course, if the user clicks the entry they would be shown the full entry. This preview is a
                        little under 320 characters.</p>
                </section>
                <section class="journal_entries_thumbnail">
                    <h2>Untitled Entry</h2>
                    <h3>Friday, November 1, 2019</h3>
                    <p>Feeling: 3 - Even / Normal</p>
                    <p>Privacy: Private</p>
                    <p>Preview: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Tincidunt vitae semper quis lectus.
                        Suspendisse ultrices gravida dictum fusce ut placerat orci nulla.</p>
                </section>
                <section class="journal_entries_thumbnail">
                    <h2>Untitled Entry</h2>
                    <h3>Monday, November 4, 2019</h3>
                    <p>Feeling: 4 - Happy</p>
                    <p>Privacy: Private</p>
                    <p>Preview: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Tincidunt vitae semper quis lectus.
                        Suspendisse ultrices gravida dictum fusce ut placerat orci nulla.</p>
                </section>
            </section>
        </section>
        );
    };
};

export default JournalEntryList;
