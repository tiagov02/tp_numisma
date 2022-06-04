import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormcoinscamPageRoutingModule } from './formcoinscam-routing.module';

import { FormcoinscamPage } from './formcoinscam.page';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormcoinscamPageRoutingModule,
  ],
  declarations: [FormcoinscamPage],
  providers:[ScreenOrientation]

})
export class FormcoinscamPageModule {}
