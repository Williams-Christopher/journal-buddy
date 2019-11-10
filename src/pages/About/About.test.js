import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom';

import About from './About';

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
            <About />
        </Router>
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
