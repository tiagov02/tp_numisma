import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormCoinsPage } from './form-coins.page';

const routes: Routes = [
  {
    path: '',
    component: FormCoinsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormCoinsPageRoutingModule {}
