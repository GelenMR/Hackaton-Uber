import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { log } from 'util';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private authService: AuthService, private afsAuth: AngularFireAuth) { }
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
    this.afsAuth.auth.signOut();
  }

}
