import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import About from '../../pages/About/About';
import JournalEntryList from '../../pages/JournalEntryList/JournalEntryList';
import CreateEntry from '../../pages/CreateEntry/CreateEntry';
import ViewEntry from '../../pages/ViewEntry/ViewEntry';
import Register from '../../pages/Register/Register';
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
            <Route path='/Create' component={CreateEntry} />
            <Route path='/View/:entry_id' render={({ match }, componentProps) => <ViewEntry match={match} entries={this.props.entries} />} />
            <Route path='/Register' component={Register} />
            <Route component={FourOhFour} />
          </Switch>
        <Footer />
      </>
    );
  };
};

export default App;
