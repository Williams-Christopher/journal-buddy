import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import About from '../../pages/About/About';
import JournalEntryList from '../../pages/JournalEntryList/JournalEntryList';
import FourOhFour from '../../pages/FourOhFour/FourOhFour';

// import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Navigation />
          <Switch>
            <Route exact path='/' component={About} />
            <Route path='/List' render={componentProps => <JournalEntryList entries={this.props.entries} />} />
            <Route component={FourOhFour} />
          </Switch>
        <Footer />
      </>
    );
  };
};

export default App;
