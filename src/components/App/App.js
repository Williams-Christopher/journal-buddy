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

import AppContext from '../../context/AppContext';
import TokenServices from '../../services/token-services';

// import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  };

  setLoginState = () => {
    this.setState({ isLoggedIn: TokenServices.hasToken() });
  };

  render() {
    const appContextValue = {
      isLoggedIn: this.state.isLoggedIn,
      setLoginState: this.setLoginState,
    }

    return (
      <>
        <AppContext.Provider value={appContextValue}>
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
        </AppContext.Provider>
      </>
    );
  };
};

export default App;
