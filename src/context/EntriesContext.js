import React from 'react';

const EntriesContext = React.createContext({
    entriesError: null,
    entries: [],
    // Entry sorting
    // Entry filter
});

export default EntriesContext;
