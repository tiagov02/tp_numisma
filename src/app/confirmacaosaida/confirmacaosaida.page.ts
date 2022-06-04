import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import {ViewWillEnter} from '@ionic/angular';

@Component({
  selector: 'app-confirmacaosaida',
  templateUrl: './confirmacaosaida.page.html',
  styleUrls: ['./confirmacaosaida.page.scss'],
})
export class ConfirmacaosaidaPage implements OnInit, ViewWillEnter {

  constructor(public router: Router, private orientecao: ScreenOrientation) { }

  ngOnInit() {
  }
  voltar(){
    this.router.navigate(['intro']);
  }

  ionViewWillEnter(): void {
    this.orientecao.lock(this.orientecao.ORIENTATIONS.PORTRAIT);
  }


}
