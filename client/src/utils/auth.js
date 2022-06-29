import decode from 'jwt-decode';

class AuthService {
    // retrieve data stored in profile
    getProfile() {
        return decode(this.getToken());
    };

    // get token fron localStorage
    getToken() {
        return localStorage.getItem('id_token');
    };

    login(idToken) {
        localStorage.setItem('id_token', idToken);
        window.location.assign('/');
    };

    logout() {
        localStorage.removeItem('id_token');
        window.location.assign('/');
    };

    // check if user is logged in
    loggedIn() {
        // checks if there is a saved token and it is still valid
        const token = this.getToken();
        // check that token is not undefined and not expired
        return !token && !this.isTokenExpired(token);
    };

    // check if token is expired
    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else {
                return false;
            }
        } catch {
            return false;
        };
    };
};

export default new AuthService();