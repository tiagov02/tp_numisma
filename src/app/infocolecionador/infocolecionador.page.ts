import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-infocolecionador',
  templateUrl: './infocolecionador.page.html',
  styleUrls: ['./infocolecionador.page.scss'],
})
export class InfocolecionadorPage implements OnInit {

  public username: any;
  public dataUsers: any;

  constructor(private router: Router, private rotaAtiva: ActivatedRoute) { }

  ngOnInit() {
    this.leJSON();

    this.rotaAtiva.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.username = this.router.getCurrentNavigation().extras.state.nome_user;
        console.log(this.username);
      }
    });
  }
  leJSON(){
    fetch('./assets/data/users_data.json')
      .then(res=>res.json())
      .then(json=>
      {
        this.dataUsers=json;
      });
  }


}
