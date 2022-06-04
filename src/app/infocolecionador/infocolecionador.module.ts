import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfocolecionadorPageRoutingModule } from './infocolecionador-routing.module';

import { InfocolecionadorPage } from './infocolecionador.page';

import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfocolecionadorPageRoutingModule
  ],
  declarations: [InfocolecionadorPage],
  providers:[ScreenOrientation]
})
export class InfocolecionadorPageModule {}
