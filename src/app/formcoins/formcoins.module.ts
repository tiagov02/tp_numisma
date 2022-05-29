import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormcoinsPageRoutingModule } from './formcoins-routing.module';

import { FormcoinsPage } from './formcoins.page';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FormcoinsPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [FormcoinsPage]
})
export class FormcoinsPageModule {}
