import { Component, OnInit } from '@angular/core';
import { TestService } from '../../test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {
  userName:string;
  response:any;
  constructor(private svc: TestService,private http:HttpClient) { 
    // svc.printMyName("Print Name from View Compontent :")
  }

  ngOnInit() {
  }

  searchGithubName(){
    this.http.get('https://api.github.com/users/'+this.userName)
    .subscribe((res)=> {      
      this.response = res;
      // console.log(this.response);
    });
  }

}
