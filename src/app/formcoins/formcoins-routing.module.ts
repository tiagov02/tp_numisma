import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormcoinsPage } from './formcoins.page';

const routes: Routes = [
  {
    path: '',
    component: FormcoinsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormcoinsPageRoutingModule {}
