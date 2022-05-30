import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmacaosaidaPageRoutingModule } from './confirmacaosaida-routing.module';

import { ConfirmacaosaidaPage } from './confirmacaosaida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacaosaidaPageRoutingModule
  ],
  declarations: [ConfirmacaosaidaPage]
})
export class ConfirmacaosaidaPageModule {}
