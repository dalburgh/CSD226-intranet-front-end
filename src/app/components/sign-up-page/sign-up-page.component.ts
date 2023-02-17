import { Component, OnInit } from '@angular/core';
import { AxiosResponse } from 'axios';
import { ApiService, EndPoints } from 'src/app/services/api.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss'],
})
export class SignUpPageComponent implements OnInit {

  public email: string;
  public password: string;
  public firstName: string;
  public lastName: string;

  constructor(private api: ApiService) {
    this.email = "";
    this.password = "";
    this.firstName = "";
    this.lastName = "";
   }

  ngOnInit() { }

  async signUp() {
    const signupContent = {
      email: this.email,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName
    }
    this.api.callPost(EndPoints.SIGNUP, signupContent)
      .then((response: AxiosResponse) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error)
      })

  }
}
