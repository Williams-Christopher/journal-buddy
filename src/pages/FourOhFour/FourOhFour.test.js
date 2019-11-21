import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom';

import TestHelpers from '../../helpers/TestHelpers';
import FourOhFour from './FourOhFour';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
        <Router history={TestHelpers.dummyHistory}>
            <FourOhFour />
        </Router>
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
