import { TOKEN_KEY } from '../config';

const TokenServices = {
    insertToken(token) {
        window.sessionStorage.setItem(TOKEN_KEY, token);
    },

    getToken() {
        return window.sessionStorage.getItem(TOKEN_KEY);
    },

    removeToken() {
        window.sessionStorage.removeItem(TOKEN_KEY);
    },

    hasToken() {
        if(TokenServices.getToken()) {
            return true;
        } else {
            return false;
        }
    },
};

export default TokenServices;