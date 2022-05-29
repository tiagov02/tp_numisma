import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-moedaexpconv',
  templateUrl: './moedaexpconv.page.html',
  styleUrls: ['./moedaexpconv.page.scss'],
})
export class MoedaexpconvPage implements OnInit {

  public infoMoeda: any;
  constructor(private router: Router, private rotaAtiva: ActivatedRoute) { }

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

}
