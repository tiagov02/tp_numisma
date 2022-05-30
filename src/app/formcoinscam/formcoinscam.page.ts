import { Component, OnInit } from '@angular/core';
import { CamService } from '../services/cam.service';

@Component({
  selector: 'app-formcoinscam',
  templateUrl: './formcoinscam.page.html',
  styleUrls: ['./formcoinscam.page.scss'],
})
export class FormcoinscamPage implements OnInit {

  constructor(public photoService: CamService) { }

  ngOnInit() {
  }

  submitForm() {
    confirm("Inseriu uma moeda com sucesso");
    }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}

