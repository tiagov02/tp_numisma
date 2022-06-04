import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormcoinsPageRoutingModule } from './formcoins-routing.module';

import { FormcoinsPage } from './formcoins.page';

import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FormcoinsPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [FormcoinsPage],
  providers:[ScreenOrientation]
})
export class FormcoinsPageModule {}
