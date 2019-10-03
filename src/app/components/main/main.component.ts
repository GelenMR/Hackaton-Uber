import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private afsAuth: AngularFireAuth) { }
  public isLogged: boolean = false;

  ngOnInit() {
    this.getCurrentUser();
  }

getCurrentUser() {
  this.authService.isAuth().subscribe(auth => {
    if (auth) {
      console.log('User Logged!');
      this.isLogged = true;
    } else {
      console.log('NOT User Logged!');
      this.isLogged = false;
    }
  });
}

  onLogout() {
    this.authService.logoutUser();
    this.router.navigate(['login']);
  }

}
