import React from 'react';
import ReactDOM from 'react-dom';

import CreateEntry from './CreateEntry';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CreateEntry />, div);
    ReactDOM.unmountComponentAtNode(div);
});
