import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import TestHelpers from '../../helpers/TestHelpers';
import Login from './Login';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Login history={TestHelpers.dummyHistory} />
        </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});
