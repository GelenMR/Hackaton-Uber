import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {
  title = 'Preferencias';

  constructor(private modalService: NgbModal) {}

  openModal(modal){
    this.modalService.open(modal);

 }

  ngOnInit() {
  }

}
