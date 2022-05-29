import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoedaexpconvPage } from './moedaexpconv.page';

const routes: Routes = [
  {
    path: '',
    component: MoedaexpconvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoedaexpconvPageRoutingModule {}
