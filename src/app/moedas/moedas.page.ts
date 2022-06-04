import {Component, OnInit} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import {ViewWillEnter} from '@ionic/angular';

@Component({
  selector: 'app-moedas',
  templateUrl: './moedas.page.html',
  styleUrls: ['./moedas.page.scss'],
})
export class MoedasPage implements OnInit, ViewWillEnter{

  //public searchbar = document.querySelector('ion-searchbar');
  public dataMoedas: any;
  public filterTerm: string;
  constructor(private router: Router,private orientacao: ScreenOrientation) {
  }

  ionViewWillEnter(): void {
    this.orientacao.lock(this.orientacao.ORIENTATIONS.PORTRAIT);
    }

  ngOnInit(): void {
    this.leJSON();
  }

  leJSON(){
    fetch('./assets/data/moedas.json')
      .then(res=>res.json())
      .then(json=>
      {
        this.dataMoedas=json;
      });
  }
  public verDetalherMoeda(moeda: any) {
    let infoMoeda: NavigationExtras;
    // eslint-disable-next-line prefer-const
    infoMoeda = {
      state: {
        dadosMoeda: moeda
      }
    };
    this.router.navigate(['moedaexpandida'], infoMoeda);
  }
}
