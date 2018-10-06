import { Component } from '@angular/core';
import { User } from './address-card/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:User;
  public list:any[];
  constructor(private http:HttpClient){
    this.http.get('api/personList/getdata/').subscribe((res:any)=>{
      this.list = res;
    });
    this.user =  new User();
    this.user.name = "Sabina Koirala (Adhikari)";
    this.user.designation = "Full Stack java Developer";
    this.user.address = "123 St. Addison,TX";
    this.user.phone = ["123-434-4342","432-434-4343"];
  }
}
