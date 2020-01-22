import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //hide="";
  constructor() { }

  ngOnInit() {
  }
  submit(){
    console.log("submit me")
    //console.log("typeeit ",this.typeeit)
  }
}
