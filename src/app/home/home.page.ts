import { Component } from '@angular/core';
import { ApiService, EndPoints } from '../services/api.service';
import { AxiosResponse } from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public content: any;

  constructor(private api: ApiService) {
    this.getPublicContent();
  }

  getPublicContent() {
    this.api.callGet(EndPoints.PUBLIC_CONTENT)
    .then((response: AxiosResponse) => {
      console.log(response.data);
      this.content = response.data;
    })
    .catch((error) => {
      console.log(error)
    })
  }

}
