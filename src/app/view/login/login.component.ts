import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  readonly clientId= "876455778073-jd2bv4bhim1l0mc7sa71s3rioc7o8dkk.apps.googleusercontent.com";
  readonly scope = "https://www.googleapis.com/auth/contacts";
  readonly redirectUrl = "http://localhost:4200/login";
  readonly url = `https://accounts.google.com/o/oauth2/auth?client_id=${this.clientId}&redirect_uri=${this.redirectUrl}&response_type=token&scope=${this.scope}`;

  constructor(private activatedRoute:ActivatedRoute,private router:Router) {
  }

  ngOnInit():void {
    const fragment = this.activatedRoute.snapshot.fragment;
    if (fragment && fragment.startsWith("access_token=")){
      const accessToken = new URLSearchParams(fragment).get("access_token");
      if (accessToken){
        localStorage.setItem("token",accessToken);
        this.router.navigateByUrl('app');
      }
    }
  }

}
