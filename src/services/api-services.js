import {API_BASE_URL} from '../config';
import TokenServices from './token-services';

const ApiServices = {
    // Create new user -> POST /api/users
    postUser(newUser) {
        return fetch(`${API_BASE_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser)
        })
        .then(result => {
            if(!result.ok) {
                return result.json().then(error => Promise.reject(error))
            }

            return result;
        });
    },

    // Login -> POST /api/login
    postLogin(loginUser) {
        return fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginUser)
        })
        .then(result => {
            if(!result.ok) {
                return result.json().then(error => Promise.reject(error))
            }

            return result.json();
        });
    },
    // Refresh token -> POST /api/refresh

    // Add a new journal entry -> POST /api/journal-entries
    postEntry(newEntry) {
        return fetch(`${API_BASE_URL}/journal-entries`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TokenServices.getToken()}`,
            },
            body: JSON.stringify(newEntry),
        })
        .then(result => {
            if(!result.ok) {
                // return result.json().then(error => Promise.reject(error))
                return result.then(error => Promise.reject(error))
            }

            return result;
        });
    },

    // List all posts for user -> GET /api/journal-entries
    getEntries() {
        return fetch(`${API_BASE_URL}/journal-entries`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TokenServices.getToken()}`,
            },
        })
        .then(result => {
            if(!result.ok) {
                return result.json().then(error => Promise.reject(error))
            }

            return result.json();
        });
    },

    // Grab an individual entry for user -> GET /api/journal-entries/:entry_id
    getEntry(entryId) {
        return fetch(`${API_BASE_URL}/journal-entries/${entryId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TokenServices.getToken()}`,
            },
        })
        .then(result => {
            if(!result.ok) {
                return result.json().then(error => Promise.reject(error))
            }

            return result.json();
        });
    },

    // Display a permalinked entry -> GET /api/share/json/:entry_id
    getPermaLinkJSON(entryId) {
        return fetch(`${API_BASE_URL}/share/json/${entryId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(result => {
            if(!result.ok) {
                return result.json().then(error => Promise.reject(error))
            }

            return result.json();
        });
    },

    // Metrics -> GET /api/metrics
    getMetrics() {
        return fetch(`${API_BASE_URL}/metrics`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TokenServices.getToken()}`,
            },
        })
        .then(result => {
            if(!result.ok) {
                return result.json().then(error => Promise.reject(error))
            }

            return result.json();
        });
    },
}

export default ApiServices;
