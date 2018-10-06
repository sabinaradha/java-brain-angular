import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  printToConsole(arg){
    console.log("You print : "+arg)
  }

  printMyName(name){
    console.log("hello "+name);
  }
}
