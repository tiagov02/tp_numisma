import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormcoinscamPage } from './formcoinscam.page';

const routes: Routes = [
  {
    path: '',
    component: FormcoinscamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormcoinscamPageRoutingModule {}
