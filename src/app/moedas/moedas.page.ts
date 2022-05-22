import { Component, OnInit } from '@angular/core';

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
    let queryTextLow=this.queryText.toLocaleLowerCase();
    let filterMoedas= [];

  }

}
