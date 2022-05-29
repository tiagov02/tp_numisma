import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfocolecionadorPageRoutingModule } from './infocolecionador-routing.module';

import { InfocolecionadorPage } from './infocolecionador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfocolecionadorPageRoutingModule
  ],
  declarations: [InfocolecionadorPage]
})
export class InfocolecionadorPageModule {}
