import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-intro';
  routes = [
    {tabName : 'Home', url:'home'},
    {tabName : 'Settings', url:'settings'}
  ];
}
