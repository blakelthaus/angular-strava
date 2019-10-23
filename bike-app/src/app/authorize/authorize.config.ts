import {AuthConfig} from "angular-oauth2-oidc";


export const authConfig: AuthConfig = {

  issuer: 'https://www.strava.com/oauth/authorize',

  redirectUri: window.location.origin + '/stats',

  clientId: '39855',

  responseType: 'code',

  scope: 'read_all'

  //approval prompt = force?

}
