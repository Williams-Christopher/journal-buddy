import React from 'react';

const EntriesContext = React.createContext({
    entriesError: null,
    entries: [],
    entrySort: null,
    sortEntryList: () => {},
    privacyFilter: null,
    filterOnPrivacy: () => {},
});

export default EntriesContext;
