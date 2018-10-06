import { Component, OnInit } from '@angular/core';
import { TestService } from '../../test.service';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {

  constructor(private svc: TestService) { 
    svc.printMyName("Print Name from View Compontent :")
  }

  ngOnInit() {
  }

}
