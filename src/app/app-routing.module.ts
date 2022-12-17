import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./view/login/login.component";
import {AppComponent} from "./app.component";
import {ContactComponent} from "./view/contact/contact.component";

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'app'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'app',
    component:ContactComponent
  },
  {
    path:'**',
    pathMatch:'full',
    redirectTo:'app'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
