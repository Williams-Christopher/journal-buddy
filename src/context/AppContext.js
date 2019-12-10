import React from 'react';

const AppContext = React.createContext ({
    error: null,
    isLoggedIn: null,
    setLoginState: () => {},
});

export default AppContext;
