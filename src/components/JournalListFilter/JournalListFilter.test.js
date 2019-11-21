import React from 'react';
import ReactDOM from 'react-dom';

import JournalListFilter from './JournalListFilter';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<JournalListFilter />, div);
    ReactDOM.unmountComponentAtNode(div);
});
