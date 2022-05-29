import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  public infoMsg: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.leJSON();
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
