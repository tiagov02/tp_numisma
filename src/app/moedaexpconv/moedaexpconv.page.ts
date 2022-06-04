import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import {ViewWillEnter} from '@ionic/angular';

@Component({
  selector: 'app-moedaexpconv',
  templateUrl: './moedaexpconv.page.html',
  styleUrls: ['./moedaexpconv.page.scss'],
})
export class MoedaexpconvPage implements OnInit, ViewWillEnter {

  public infoMoeda: any;
  constructor(private router: Router, private rotaAtiva: ActivatedRoute, private orientacao: ScreenOrientation) { }

  ngOnInit() {
    this.rotaAtiva.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.infoMoeda = this.router.getCurrentNavigation().extras.state.dadosMoeda;
        //console.log(this.infoMoeda);
      }
    });
  }

  changepanel() {
    this.router.navigate(['start']);
  }

  ionViewWillEnter(): void {
    this.orientacao.lock(this.orientacao.ORIENTATIONS.PORTRAIT);
  }

}
