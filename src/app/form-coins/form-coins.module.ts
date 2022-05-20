import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormCoinsPageRoutingModule } from './form-coins-routing.module';

import { FormCoinsPage } from './form-coins.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormCoinsPageRoutingModule
  ],
  declarations: [FormCoinsPage]
})
export class FormCoinsPageModule {}
