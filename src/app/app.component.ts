import { Component } from '@angular/core';
import { OAuthService, NullValidationHandler, AuthConfig } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ng-fae-client-orders-oath2';
  constructor(private oauthService: OAuthService) {
    this.configure();
  }

  authConfig: AuthConfig = {
    issuer: 'http://localhost:8180/auth/realms/fae-client-orders-oauth2',
    redirectUri: window.location.origin,// + "/ng-fae-client-orders-oauth2",
    clientId: 'fae-client-orders-oauth2',
    scope: 'openid profile email offline_access fae-client-orders-oauth2',
    responseType: 'code',
  //at_hash is not present in JWT token
    disableAtHashCheck: true,
    showDebugInformation: true
  }
    
  public login() {
    this.oauthService.initLoginFlow();
  }

  public logoff() {
    this.oauthService.logOut();
  }
    
  private configure() {
    this.oauthService.configure(this.authConfig);
    this.oauthService.tokenValidationHandler = new  NullValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}
