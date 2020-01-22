import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service'

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.scss']
})
export class UserregistrationComponent implements OnInit {

  constructor(private userService : UserService) { 
    
  }

  ngOnInit() {
  }
  
}
