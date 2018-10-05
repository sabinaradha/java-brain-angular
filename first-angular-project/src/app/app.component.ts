import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:User;
  constructor(){
    this.user =  new User();
    this.user.name = "Sabina Koirala (Adhikari)";
    this.user.address = "123 St. Addison,TX";
    this.user.phone = ["123-434-4342","432-434-4343"];
  }
}
