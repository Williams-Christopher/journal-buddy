import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom';

import CreateEntry from './CreateEntry';
import TestHelpers from '../../helpers/TestHelpers';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Router history={TestHelpers.dummyHistory}>
                <CreateEntry entries={TestHelpers.entries} />
            </Router>
        </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});
