import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router, private authService: AuthService) { }
  // public isLogged: boolean = false;

  ngOnInit() {
  }

  onLoginGoogle() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    this.router.navigate(['main']);
  }

  onLoginFacebook() {
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
    this.router.navigate(['main']);
  }

  onLogout() {
    this.authService.logoutUser();
    this.router.navigate(['login']);
  }

}
