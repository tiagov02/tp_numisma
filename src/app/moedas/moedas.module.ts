import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoedasPageRoutingModule } from './moedas-routing.module';

import { MoedasPage } from './moedas.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoedasPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [MoedasPage]
})
export class MoedasPageModule {}
