import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom';

import TestHelpers from '../../helpers/TestHelpers';
import JournalListItem from './JournalListItem';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Router history={TestHelpers.dummyHistory}>
                <JournalListItem {...TestHelpers.entries[0]} />
            </Router>
        </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});
