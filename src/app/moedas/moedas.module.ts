import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoedasPageRoutingModule } from './moedas-routing.module';

import { MoedasPage } from './moedas.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoedasPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [MoedasPage],
  providers:[ScreenOrientation]
})
export class MoedasPageModule {}
