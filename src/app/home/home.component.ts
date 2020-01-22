import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service'
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  activatedRoute:ActivatedRoute;
  allcountries=null;
  constructor(private userService : UserService,
    activatedRoute:ActivatedRoute) { 
      this.activatedRoute=activatedRoute;
    }

  ngOnInit() {
    let self=this
    self.activatedRoute.params.subscribe(
      (params)=>{
        console.log("home params ",params);
        self.userService.getCountries().then(res=>{
          //console.log("data ",res)
          self.allcountries=res["data"];
          self.userService.setAllCountries(self.allcountries)
          
        })
        .catch(err=>{
          console.log("err ",err)
        })
      }
    )
  }
}
