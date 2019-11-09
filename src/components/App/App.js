import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import About from '../../pages/About/About';
import FourOhFourPage from '../../pages/FourOhFourPage/FourOhFourPage';

// import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Navigation />
          <Switch>
            <Route exact path='/' component={About} />
            <Route component={FourOhFourPage} />
          </Switch>
        <h1>Placeholder body text</h1>
      </>
    );
  };
};

export default App;
