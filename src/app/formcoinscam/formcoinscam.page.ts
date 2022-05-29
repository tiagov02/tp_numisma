import { Component, OnInit } from '@angular/core';
import { CamService } from '../services/cam.service';
import {ImagePicker} from "@ionic-native/image-picker/ngx";


@Component({
  selector: 'app-formcoinscam',
  templateUrl: './formcoinscam.page.html',
  styleUrls: ['./formcoinscam.page.scss'],
})
export class FormcoinscamPage implements OnInit {

  constructor(public photoService: CamService,private imgPicker: ImagePicker) { }

  ngOnInit() {
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  /*photoFromPhoneGallery() {
    this.photoService.imagePicker();
  }*/
}
