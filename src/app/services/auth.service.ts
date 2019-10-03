import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private afsAuth: AngularFireAuth) { }

  loginMovileUser() {}
  loginGoogleUser() {}
  loginFBUser() {}

  logoutUser() {
    this.afsAuth.auth.signOut();
  }

  isAuth() {
    return this.afsAuth.authState.pipe(map(auth => auth));
  }

}
