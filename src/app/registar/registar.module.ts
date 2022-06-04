import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistarPageRoutingModule } from './registar-routing.module';

import { RegistarPage } from './registar.page';

import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RegistarPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [RegistarPage],
  providers:[ScreenOrientation]
})
export class RegistarPageModule {}
