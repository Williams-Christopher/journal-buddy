import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faBars, faBook} from '@fortawesome/free-solid-svg-icons';

import App from './App';

library.add(
  faBars, // hangerburger icon in navigation
  faBook, // Icon next to the Journal Buddy title
);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
