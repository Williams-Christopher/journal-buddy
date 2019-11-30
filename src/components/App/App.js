import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import About from '../../pages/About/About';
import JournalEntryList from '../../pages/JournalEntryList/JournalEntryList';
import CreateEntry from '../../pages/CreateEntry/CreateEntry';
import ViewEntry from '../../pages/ViewEntry/ViewEntry';
import Register from '../../pages/Register/Register';
import Login from '../../pages/Login/Login';
import Reports from '../../pages/Reports/Reports';
import FourOhFour from '../../pages/FourOhFour/FourOhFour';

import TokenServices from '../../services/token-services';

// import './App.css';

class App extends React.Component {
  componentDidMount() {
    TokenServices.insertToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTc0ODM5OTEzLCJzdWIiOiJwc3RpY2tpbmdzMCJ9.RsuQsBfVRs47uTO110CDav2ki8tpQa8GYI2t0cvf7Pk');
    
    fetch('http://localhost:8000/api/journal-entries', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TokenServices.getToken()}`,
      },
    })
    .then(result => {
      return result.json()
    })
    .then(content => {
      console.log(content);
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <>
        <Navigation />
        <main>
          <Switch>
            <Route exact path='/' component={About} />
            <Route path='/List' render={componentProps => <JournalEntryList entries={this.props.entries} />} />
            <Route path='/Create' component={CreateEntry} />
            <Route path='/View/:entry_id' render={({ match }, componentProps) => <ViewEntry match={match} entries={this.props.entries} />} />
            <Route path='/Register' component={Register} />
            <Route path='/Login' component={Login} />
            <Route path='/Reports' component={Reports} />
            <Route component={FourOhFour} />
          </Switch>
        </main>
        <Footer />
      </>
    );
  };
};

export default App;
