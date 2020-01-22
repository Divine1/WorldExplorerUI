import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'
import { UserregistrationComponent } from './userregistration/userregistration.component'

const routes: Routes = [
  { path:'login',component : LoginComponent},
  {path:'login/register',component : UserregistrationComponent},
  { path:'home',component : HomeComponent },
  { path : "**", redirectTo:"/login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
