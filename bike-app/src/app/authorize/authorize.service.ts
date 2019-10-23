import { Injectable } from '@angular/core';
import { OAuthService } from "angular-oauth2-oidc";
import { JwksValidationHandler } from "angular-oauth2-oidc";
import { authConfig } from "./authorize.config";

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  constructor(private oauthService: OAuthService) {
    this.configure();
  }

  configure() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }



  login() {
    console.log('made it #2');
    this.oauthService.initLoginFlow();
  }

  logout() {}
}
