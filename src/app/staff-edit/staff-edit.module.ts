import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StaffEditPageRoutingModule } from './staff-edit-routing.module';

import { StaffEditPage } from './staff-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StaffEditPageRoutingModule
  ],
  declarations: [StaffEditPage]
})
export class StaffEditPageModule {}
