import { Component, OnInit } from '@angular/core';
import { ApiService, EndPoints } from '../services/api.service';
import { AxiosResponse } from 'axios';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  public content: string;

  constructor(private api: ApiService) {
    this.content = '';
  }

  ngOnInit() {
  }

  editPublicContent() {
    const publicContent = { registryKey: "public_content", registryValue: this.content };
    this.api.callPut(EndPoints.PUBLIC_CONTENT, publicContent)
      .then((response: AxiosResponse) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }

  editStaffContent() {
    const staffContent = { registryKey: "staff_content", registryValue: this.content };
    this.api.callPut(EndPoints.STAFF_CONTENT, staffContent)
      .then((response: AxiosResponse) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }
}


