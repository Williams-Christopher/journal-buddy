import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Router} from 'react-router-dom';

import TestHelpers from '../../helpers/TestHelpers';
import ViewEntry from './ViewEntry';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
        <Router history={TestHelpers.dummyHistory}>
        <ViewEntry match={TestHelpers.dummyMatch} entries={TestHelpers.entries} />
        </Router>
        </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});
