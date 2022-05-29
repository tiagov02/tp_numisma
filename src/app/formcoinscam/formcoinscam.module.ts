import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormcoinscamPageRoutingModule } from './formcoinscam-routing.module';

import { FormcoinscamPage } from './formcoinscam.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormcoinscamPageRoutingModule,
  ],
  declarations: [FormcoinscamPage],

})
export class FormcoinscamPageModule {}
