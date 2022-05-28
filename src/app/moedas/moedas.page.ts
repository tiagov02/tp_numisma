import {Component, OnInit} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
//import {of} from "rxjs";
//import {of} from "rxjs";
//import any = jasmine.any;
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-moedas',
  templateUrl: './moedas.page.html',
  styleUrls: ['./moedas.page.scss'],
})
export class MoedasPage implements OnInit {

  //public searchbar = document.querySelector('ion-searchbar');
  public dataMoedas: any;
  public filterTerm: string;
  constructor(private router: Router) {
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

    if(val && val.trim() != ''){
      this.dataMoedas.value=this.dataMoedas.value.filter((item) => {
        return(item.toLowerCase().indexOf(val.toLowerCase())>1);
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
  public verDetalherMoeda(moedaKey: any) {
    let infoMoeda: NavigationExtras;
    // eslint-disable-next-line prefer-const
    infoMoeda = {
      state: {
        dadosMoeda: this.dataMoedas[moedaKey]
      }
    };
    this.router.navigate(['moedaexpandida'], infoMoeda);
  }
}
