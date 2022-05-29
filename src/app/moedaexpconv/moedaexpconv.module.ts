import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoedaexpconvPageRoutingModule } from './moedaexpconv-routing.module';

import { MoedaexpconvPage } from './moedaexpconv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoedaexpconvPageRoutingModule
  ],
  declarations: [MoedaexpconvPage]
})
export class MoedaexpconvPageModule {}
