import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartPageRoutingModule } from './start-routing.module';

import { StartPage } from './start.page';

import { IonicStorageModule } from '@ionic/storage-angular';

import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        StartPageRoutingModule,
        ReactiveFormsModule,
        IonicModule.forRoot(),
    ],
  declarations: [StartPage],
  providers:[ScreenOrientation]
})
export class StartPageModule {}
