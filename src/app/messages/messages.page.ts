import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  public infoMsg: any;
  public nomeColec:any;
  constructor(private router: Router, private rotaAtiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.leJSON();
    this.rotaAtiva.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.nomeColec = this.router.getCurrentNavigation().extras.state.nome;
        console.log(this.nomeColec);
      }
    });
  }

  leJSON() {
    fetch('./assets/data/mensagens_users.json')
      .then(res=>res.json())
      .then(json=>
      {
        this.infoMsg=json;
      });
  }



}
