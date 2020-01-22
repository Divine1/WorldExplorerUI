import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  allcountries=null;
  allcountriesUrl = "https://restcountries.eu/rest/v2/all"
  constructor() { }

  getAllCountries(){
    return this.allcountries;
  }
  setAllCountries(data){
    this.allcountries=data;
  }
  getCountries(){
    console.log("in getCountries()")
    if(!this.allcountries){
      console.log("in axios")
      return axios.get(this.allcountriesUrl)
    }
    else{
      console.log("in local")
      return new Promise((resolve,reject)=>{
        resolve({data : this.allcountries})
      })
    }
  }
}
