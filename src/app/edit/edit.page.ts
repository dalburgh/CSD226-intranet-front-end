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
    if (this.checkToken() == false) {
      alert("No access token stored, Please log in to edit content.");
      return;
    }
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
    if (this.checkToken() == false) {
      alert("No access token stored, Please log in to edit content.");
      return;
    }
    const staffContent = { registryKey: "staff_content", registryValue: this.content };
    this.api.callPut(EndPoints.STAFF_CONTENT, staffContent)
      .then((response: AxiosResponse) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }

  checkToken() {
    if (this.api.getAccessToken() == '') {
      return false;
    }
    return true;
  }
}


