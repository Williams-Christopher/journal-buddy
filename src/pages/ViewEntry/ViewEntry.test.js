import React from 'react';
import ReactDOM from 'react-dom';

import TestHelpers from '../../helpers/TestHelpers';
import ViewEntry from './ViewEntry';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <ViewEntry match={TestHelpers.dummyMatch} entries={TestHelpers.entries} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
