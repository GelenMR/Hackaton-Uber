import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {
  title = 'Preferencias';

  constructor(private modalService: NgbModal, private authService: AuthService, private router: Router, private afsAuth: AngularFireAuth) {}

  openModal(modal){
    this.modalService.open(modal);

 }

  ngOnInit() {
  }

}
