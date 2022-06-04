import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import {ViewWillEnter} from '@ionic/angular';

@Component({
  selector: 'app-moedaexpandida',
  templateUrl: './moedaexpandida.page.html',
  styleUrls: ['./moedaexpandida.page.scss'],
})

export class MoedaexpandidaPage implements OnInit , ViewWillEnter{

  public infoMoeda: any;

  constructor(private router: Router, private rotaAtiva: ActivatedRoute,private orientacao: ScreenOrientation) {
  }

  ngOnInit() {
    this.rotaAtiva.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.infoMoeda = this.router.getCurrentNavigation().extras.state.dadosMoeda;
        //console.log(this.infoMoeda);
      }
    });
  }

  changepanel(nomeColec: any) {
    const dadosMoeda: NavigationExtras = {
      state: {
        nome: nomeColec
      }
    };
    this.router.navigate(['messages'], dadosMoeda);
  }

  verPerfil(userName: any) {
    const dataUser: NavigationExtras = {
      state: {
        nome_user: userName
      }
    };
    this.router.navigate(['infocolecionador'], dataUser);
  }

  ionViewWillEnter(): void {
    this.orientacao.lock(this.orientacao.ORIENTATIONS.PORTRAIT);
  }

}
