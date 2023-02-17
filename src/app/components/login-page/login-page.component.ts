import { Component, OnInit } from '@angular/core';
import { AxiosResponse } from 'axios';
import { ApiService, EndPoints } from 'src/app/services/api.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {

  public email: String;
  public password: String;

  constructor(private api: ApiService) {
    this.email = "";
    this.password = "";
  }

  ngOnInit() { }

  login(email: String, password: String) {
    const loginData = { email: email, password: password };
    this.api.callPost(EndPoints.LOGIN, loginData)
      .then((response: AxiosResponse) => {
        this.api.saveAccessToken(response.data.accessToken)
        console.log("Stored access token: " + response.data.accessToken);
      })
      .catch((error) => {
        console.log(error)
      })
  }

}
