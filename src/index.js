import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faBars, faBook} from '@fortawesome/free-solid-svg-icons';

import App from './components/App/App';
import './index.css';

library.add(
    faBars, // hangerburger icon in navigation
    faBook, // Icon next to the Journal Buddy title
);

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
