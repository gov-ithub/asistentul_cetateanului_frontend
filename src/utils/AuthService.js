import Auth0 from 'auth0-js';
import Auth0Lock from 'auth0-lock';
import { isTokenExpired } from './jwtHelper';
import { EventEmitter } from 'events';

export default class AuthService extends EventEmitter {
  constructor(clientId, domain) {
    super();

    this.auth0 = new Auth0({
      clientID: clientId,
      domain: domain,
      responseType: 'token'
    });

    this.lock = new Auth0Lock(clientId, domain, {});
    this.lock.on('authenticated', this._doAuthentication.bind(this));

    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
  }

  _doAuthentication(authResult) {
    this.setToken(authResult.idToken);

    this.lock.getProfile(authResult.idToken, (error, profile) => {
      if (error) {
        console.log('Error loading the profile', error);
      } else {
        this.setProfile(profile);
      }
    });
  }

  setProfile(profile) {
    localStorage.setItem('profile', JSON.stringify(profile));
    this.emit('profile_updated', profile);
  }

  getProfile() {
    const profile = localStorage.getItem('profile');
    return profile ? JSON.parse(localStorage.profile) : {};
  }

  login(params, onError) {
    this.auth0.login(params, onError);
  }

  signup(params, onError) {
    this.auth0.signup(params, onError);
  }

  parseHash(hash) {
    const authResult = this.auth0.parseHash(hash);
    if (authResult && authResult.idToken) {
      this.setToken(authResult.idToken);
    }
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !isTokenExpired(token);
  }

  setToken(idToken) {
    localStorage.setItem('id_token', idToken);
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }
}
