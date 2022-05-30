import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-moedaexpandida',
  templateUrl: './moedaexpandida.page.html',
  styleUrls: ['./moedaexpandida.page.scss'],
})

export class MoedaexpandidaPage implements OnInit {

  public infoMoeda: any;

  constructor(private router: Router, private rotaAtiva: ActivatedRoute) {
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

}
