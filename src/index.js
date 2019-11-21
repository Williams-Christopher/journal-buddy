import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App/App';
import testData from './test_data';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <App entries={testData.entries} users={testData.users} />
    </BrowserRouter>,
    document.getElementById('root')
);
