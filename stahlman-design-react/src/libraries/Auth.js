import auth0 from 'auth0-js'

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'stahlmandesign.auth0.com',
    clientID: 'G9Fwe2sMPp0WtkWMIsqGUrap-2pz9YGc',
    redirectUri: 'http://localhost:3001/callback',
    audience: 'https://stahlmandesign.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  })

  login() {
    this.auth0.authorize()
  }
}
