import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoedaconvidadoPage } from './moedaconvidado.page';

const routes: Routes = [
  {
    path: '',
    component: MoedaconvidadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoedaconvidadoPageRoutingModule {}
