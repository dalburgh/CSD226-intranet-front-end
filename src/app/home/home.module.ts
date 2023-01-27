import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { LoginPageComponent } from '../components/login-page/login-page.component';
import { SignUpPageComponent } from '../components/sign-up-page/sign-up-page.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, LoginPageComponent, SignUpPageComponent]
})
export class HomePageModule {}
