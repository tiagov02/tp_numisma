import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import {ViewWillEnter} from '@ionic/angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit,ViewWillEnter {

  constructor(private router: Router,private orientacao:ScreenOrientation) { }

  ngOnInit() {
  }

  continuetonumisma(){
    this.router.navigate(['start']);
  }

  ionViewWillEnter(): void {
    this.orientacao.lock(this.orientacao.ORIENTATIONS.PORTRAIT);
  }

}
