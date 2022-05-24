import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
//import {of} from "rxjs";
//import any = jasmine.any;

@Component({
  selector: 'app-moedas',
  templateUrl: './moedas.page.html',
  styleUrls: ['./moedas.page.scss'],
})
export class MoedasPage implements OnInit {

      public queryText: string;
      public dataMoedas: any;
      constructor(private router: Router) { }

      ngOnInit(): void{
        fetch('./assets/data/moedas.json')
          .then(res=>res.json())
      .then(json=>
      {
        this.dataMoedas=json;
      });
  }
  /*updateMoedas(){
    let _:any;
    let queryTextLow=this.queryText.toLocaleLowerCase();
    let filterMoedas= [];
    _.forEach(this.dataMoedas,td=>{
      let moedas=_.filter(td.dataMoedas,t=>(<any>t).nome.toLowerCase().includes(queryTextLow));
      if(moedas.length){
        filterMoedas.push({divisionName:td.divisionName,divisionMoedas:td.divisionMoedas});
    }
  });
    this.dataMoedas=filterMoedas;
  }*/

  public verDetalherMoeda(moedaKey: string){
    let infoMoeda: NavigationExtras;
    // eslint-disable-next-line prefer-const
    infoMoeda= {
      state:{
        dadosMoeda: this.dataMoedas[moedaKey]
      }
    };
    this.router.navigate(['moedaexpandida'],infoMoeda);
  }
}
