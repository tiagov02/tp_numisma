import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
//import { ImagePicker } from '@ionic-native/image-picker/ngx';
//import { Camera, CameraOptions } from '@ionic-native/camera';

@Injectable({
  providedIn: 'root'
})

export class CamService {
  public imgRes: any;
  public options: any;
  photo: string = '';


  // @ts-ignore
  constructor(private camera: Camera) { }

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
  }


}

  //Erro netsa
  /*public async imagePicker() {
    this.options = {
      width: 200,
      quality: 30,
      outputType: 1
    };

    this.imgRes = [];
    this.imgPicker.getPictures(this.options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        this.imgRes.push('data:image/jpeg;base64,' + results[i]);
      }
    }, (error) => {
      alert(error);
    });
  }*/

