import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'second-project';

  constructor(svc:TestService){
    svc.printToConsole("test print");
    svc.printToConsole("sabina");  
  }

}
