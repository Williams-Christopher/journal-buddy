import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faBars, faBook} from '@fortawesome/free-solid-svg-icons';

import TestHelpers from '../../helpers/TestHelpers';
import Navigation from './Navigation';

library.add(
  faBars, // hangerburger icon in navigation
  faBook, // Icon next to the Journal Buddy title
);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
        <Router history={TestHelpers.dummyHistory}>
            <Navigation />
        </Router>
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
