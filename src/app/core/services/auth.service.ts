import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {UserInfo} from 'firebase';

export interface Credentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly authState$ = this.fireAuth.authState;

  private userData: UserInfo;
  constructor (private fireAuth: AngularFireAuth) {}

  login(credentials: Credentials) {
    return this.fireAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(userCredentials => this.userData = userCredentials.user);
  }

  register(credentials: Credentials) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }

  isLoggedIn() {
    return !!this.userData;
  }

  logout() {
    return this.fireAuth.auth.signOut();
  }

  get user() {
    return this.userData;
  }
}
