import { Component, OnInit } from '@angular/core';
import any = jasmine.any;

@Component({
  selector: 'app-moedas',
  templateUrl: './moedas.page.html',
  styleUrls: ['./moedas.page.scss'],
})
export class MoedasPage implements OnInit {

  public queryText: string;
  public dataMoedas: any;
  constructor() { }

  ngOnInit(): void{
    fetch('./assets/data/moedas.json')
      .then(res=>res.json())
      .then(json=>
      {
        this.dataMoedas=json;
      });
  }
  updateMoedas(){
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
  }

}
