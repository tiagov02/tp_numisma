import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoedaconvidadoPageRoutingModule } from './moedaconvidado-routing.module';

import { MoedaconvidadoPage } from './moedaconvidado.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoedaconvidadoPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [MoedaconvidadoPage],
  providers:[ScreenOrientation]
})
export class MoedaconvidadoPageModule {}
