import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  title = 'Mi perfil';

  constructor(private modalService: NgbModal) {}

   openModal(modal){
     this.modalService.open(modal);

  }

  ngOnInit() {
  }


}
