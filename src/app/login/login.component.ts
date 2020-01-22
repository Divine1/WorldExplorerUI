import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from './../user.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide=true;
  constructor(private router: Router,
    private userService : UserService) { 

  }

  ngOnInit() {
  }
  submit(){
    console.log("submit me")
    //console.log("typeeit ",this.typeeit)
  }
  register(){
    console.log("in register()")
    //this.router.navigate(['/','login','/','register']);
    this.router.navigateByUrl('/login/register');
  }
  signin(){
    console.log("in signin()")
    this.router.navigate(['/home']);
  }
}
