import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  constructor(private authService: AuthService, private router: Router, private afsAuth: AngularFireAuth) { }

  title = 'Mi perfil';

  ngOnInit() {
  }
  
  onLogout() {
    this.authService.logoutUser();
    this.router.navigate(['login']);
  }

}
