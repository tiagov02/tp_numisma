import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfocolecionadorPage } from './infocolecionador.page';

const routes: Routes = [
  {
    path: '',
    component: InfocolecionadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfocolecionadorPageRoutingModule {}
