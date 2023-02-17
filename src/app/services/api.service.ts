import { Injectable } from '@angular/core';
import axios from 'axios';
import { config } from 'process';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() {
    this.setupInterceptor();
  }

  private setupInterceptor() {
    axios.defaults.baseURL = 'http://localhost:8080';

    axios.interceptors.request.use(config => {
      const token = this.getAccessToken();
      if (token) {
        config.headers["Authorization"] = "Bearer " + token;
      }
      console.log("Request has been intercepted");
      return config;
    }, error => {
      return Promise.reject(error);
    });
  }

  async callGet(url: string) {
    return await axios.get(url);
  }

  async callPost(url: string, data: any) {
    return await axios.post(url, data);
  }

  async callPut(url: string, data: any) {
    return await axios.put(url, data);
  }

  getAccessToken(): string {
    const token = localStorage.getItem("accessToken");
    if (token) {
      return token;
    }
    return "";
  }
  saveAccessToken(accessToken: string) {
    localStorage.setItem("accessToken", accessToken);
  }
  removeAccessToken() {
    localStorage.removeItem("accessToken");
  }

}

export enum EndPoints {
  USER = "user",
  SIGNUP = "signup",
  LOGIN = "auth/login",
  STAFF_CONTENT = "staffcontent",
  PUBLIC_CONTENT = "publiccontent",
 }
