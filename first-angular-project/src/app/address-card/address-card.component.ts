import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

 
  @Input('user')user : User;
  isCollapsed: boolean = true;
  inputText:string = "Initial Value";

  constructor() {
    // this.user = new User();
    // this.user.name = "Sabina Koirala";
    // this.user.designation = "Full Stack Java Developer";
    // this.user.address = "123 Drive, Gotham City";
    // this.user.phone = ["32423-324-3423","645-435-2344"];
  }

  toggleCollaspse(){
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit() {
  }
}
