import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaffEditPage } from './staff-edit.page';

const routes: Routes = [
  {
    path: '',
    component: StaffEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffEditPageRoutingModule {}
