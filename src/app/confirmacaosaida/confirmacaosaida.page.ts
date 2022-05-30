import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-confirmacaosaida',
  templateUrl: './confirmacaosaida.page.html',
  styleUrls: ['./confirmacaosaida.page.scss'],
})
export class ConfirmacaosaidaPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  voltar(){
    this.router.navigate(['intro']);
  }


}
