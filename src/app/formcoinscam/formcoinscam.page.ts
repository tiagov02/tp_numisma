import { Component, OnInit } from '@angular/core';
import { CamService } from '../services/cam.service';
import {Router} from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import {ViewWillEnter} from '@ionic/angular';

@Component({
  selector: 'app-formcoinscam',
  templateUrl: './formcoinscam.page.html',
  styleUrls: ['./formcoinscam.page.scss'],
})
export class FormcoinscamPage implements OnInit,ViewWillEnter {

  constructor(public photoService: CamService,private router: Router, private orientacao: ScreenOrientation) { }

  ngOnInit() {
  }

  submitForm() {
    confirm("Inseriu uma moeda com sucesso");
    this.router.navigate(['moedas']);
    }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  ionViewWillEnter(): void {
    this.orientacao.lock(this.orientacao.ORIENTATIONS.PORTRAIT);
  }

}

