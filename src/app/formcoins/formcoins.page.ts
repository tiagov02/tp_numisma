import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, timer} from 'rxjs';
import {map} from 'rxjs/operators';
import {NavigationExtras, Router} from '@angular/router';

import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import {ViewWillEnter} from '@ionic/angular';

// @ts-ignore
@Component({
  selector: 'app-formcoins',
  templateUrl: './formcoins.page.html',
  styleUrls: ['./formcoins.page.scss'],
})
export class FormcoinsPage implements OnInit ,ViewWillEnter{

  formcoins: FormGroup;
  isSubmitted: boolean;

  constructor(public formBuilder: FormBuilder, private router: Router, private orientacao: ScreenOrientation) {
    this.isSubmitted = false;
  }

  ngOnInit() {
    this.formcoins = this.formBuilder.group({
      namecoin: ['', [Validators.required, Validators.minLength(2)]],
      //typeAd: [true, Validators.pattern('true')]
      codpostal: ['', [Validators.required, Validators.pattern('\\d{4}((-)\\d{3})')]],
      location: ['', [Validators.required,]],
      qtd: ['', [Validators.required,]],
      price: [''],
      valor: ['', [Validators.required,]],
      type: ['', [Validators.required,]],
      state: ['', [Validators.required,]]
    });
  }
  submitForm() {
    this.isSubmitted = true;
    if (!this.formcoins.valid) {
      return false;
    } else {
      //console.log(this.formcoins.value);
      console.log(this.formcoins.controls.type.value);
      this.router.navigate(['formcoinscam']);
      this.formcoins.reset();
    }
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get formControls() {
    return this.formcoins.controls;
  }

  onChange(): boolean{
    // eslint-disable-next-line eqeqeq
    if(this.formcoins.controls.type.value=='v'){
      this.formcoins.get('price').setValidators([Validators.required]);
      this.formcoins.get('price').updateValueAndValidity();
      return true;
    }
    this.formcoins.get('price').clearValidators();
    this.formcoins.get('price').updateValueAndValidity();
    return false;
  }

  continuetoformcoins(){
    if(this.isSubmitted==true) {
      this.router.navigate(['formcoinscam']);
    }
  }
  ionViewWillEnter(): void {
    this.orientacao.lock(this.orientacao.ORIENTATIONS.PORTRAIT);
  }

}
