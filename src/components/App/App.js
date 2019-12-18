import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import About from '../../pages/About/About';
import JournalEntryList from '../../pages/JournalEntryList/JournalEntryList';
import CreateEntry from '../../pages/CreateEntry/CreateEntry';
import ViewEntry from '../../pages/ViewEntry/ViewEntry';
import Register from '../../pages/Register/Register';
import Login from '../../pages/Login/Login';
import Reports from '../../pages/Reports/Reports';
import ViewPermalink from '../../pages/ViewPermalink/ViewPermalink';
import FourOhFour from '../../pages/FourOhFour/FourOhFour';

import AppContext from '../../context/AppContext';
import TokenServices from '../../services/token-services';

// import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  };

  componentDidMount() {
    this.setLoginState();
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
              {/* Paging Dr. DRY: Surely I can turn these conditional renders into a function/component through which the spice can flow*/}
              <Route path='/MyEntries' render={componentProps => TokenServices.hasToken() ? <JournalEntryList /> : <Redirect to='/Login' />} />
              <Route path='/Create' render={componentProps => TokenServices.hasToken() ? <CreateEntry /> : <Redirect to='/Login' />} />
              <Route path='/View/:entry_id' render={({match}, componentProps) => TokenServices.hasToken() ? <ViewEntry match={match} /> : <Redirect to='/Login' />} />
              <Route path='/Metrics' render={componentProps => TokenServices.hasToken() ? <Reports /> : <Redirect to='/Login' />} />
              <Route path='/Register' render={componentProps => TokenServices.hasToken() ? <Redirect to='/MyEntries' /> : <Register />} />
              <Route path='/Login' render={componentProps => TokenServices.hasToken() ? <Redirect to='/MyEntries' /> : <Login />} />
              <Route path='/share/:entry_id' component={ViewPermalink} />
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
