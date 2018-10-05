import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  // user : any;
  // ask angular
  @Input('user') user : User;

  constructor() {
    
  }

  ngOnInit() {
  }
}
