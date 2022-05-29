import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserService {

  constructor(private storage: Storage) { }
  async ionViewWillEnter() {
    await this.storage.create();
  }

  async setValue() {
    await this.storage.set('name', 'Max');
    console.log(this.storage);
  }

  async getValue() {
    const value = await this.storage.get('name');
    console.log('Got value', value);
  }

  async enumerate() {
    this.storage.forEach((value, key, index) => {
      console.log(`ITEM - ${key} = ${value} [${index}]`);
    });
  }
}
