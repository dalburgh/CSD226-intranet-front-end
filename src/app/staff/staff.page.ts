import { Component, OnInit } from '@angular/core';
import { ApiService, EndPoints } from '../services/api.service';
import { AxiosResponse } from 'axios';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.page.html',
  styleUrls: ['./staff.page.scss'],
})
export class StaffPage implements OnInit {

  content: any;

  constructor(private api: ApiService) {
    this.getStaffContent();
  }

  ngOnInit() {
  }

  getStaffContent() {
    this.api.callGet(EndPoints.STAFF_CONTENT)
    .then((response: AxiosResponse) => {
      console.log(response.data);
      this.content = response.data;
    })
    .catch((error) => {
      console.log(error)
    })
  }

}
