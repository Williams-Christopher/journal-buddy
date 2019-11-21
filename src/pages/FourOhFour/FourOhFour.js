import React from 'react';
import { Link } from 'react-router-dom';

import './FourOhFour.css';

class FourOhFour extends React.Component {
    render() {
        return (
            <>
                <h1>404 - The requested page does not exist</h1>
                <p>Time to try another page or <Link className='common_link' to={'/'}>head home</Link>.</p>
            </>
        );
    };
};

export default FourOhFour;
