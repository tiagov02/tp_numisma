import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {ViewWillEnter} from '@ionic/angular';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-moedaconvidado',
  templateUrl: './moedaconvidado.page.html',
  styleUrls: ['./moedaconvidado.page.scss'],
})
export class MoedaconvidadoPage implements OnInit, ViewWillEnter{

  public dataMoedas: any;
  public filterTerm: string;
  constructor(private router: Router,private orientacao:ScreenOrientation) {
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

  updateMoedas(ev: any) {
    this.leJSON();

    const val= ev.target.value;

    if (val && val.trim() != '') {
      this.dataMoedas = this.dataMoedas.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  /*public handleInput(event) {
    const query = event.target.value.toLowerCase();
    requestAnimationFrame(() => {
      this.dataMoedas.forEach((item) => {
        const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
        item.style.display = shouldShow ? 'block' : 'none';
      });
    });
  }*/
  public verDetalherMoeda(moeda: any) {
    let infoMoeda: NavigationExtras;
    infoMoeda = {
      state: {
        dadosMoeda: moeda
      }
    };
    this.router.navigate(['moedaexpconv'], infoMoeda);
  }

}
