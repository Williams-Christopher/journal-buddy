import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom';

import testData from '../../test_data';
import JournalEntryList from './JournalEntryList';

const history = {
    createHref: jest.fn(),
    listen: jest.fn(),
    location: {
        pathname: '/',
    }
};

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Router history={history}>
                <JournalEntryList entries={testData.entries} />
            </Router>
        </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});
