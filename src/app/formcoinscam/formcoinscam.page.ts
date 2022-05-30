import { Component, OnInit } from '@angular/core';
import { CamService } from '../services/cam.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-formcoinscam',
  templateUrl: './formcoinscam.page.html',
  styleUrls: ['./formcoinscam.page.scss'],
})
export class FormcoinscamPage implements OnInit {

  constructor(public photoService: CamService,private router:Router ) { }

  ngOnInit() {
  }

  submitForm() {
    confirm("Inseriu uma moeda com sucesso");
    this.router.navigate(['moedas']);
    }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}

