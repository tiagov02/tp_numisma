import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, timer} from 'rxjs';
import {map} from 'rxjs/operators';
import {NavigationExtras, Router} from '@angular/router';

// @ts-ignore
@Component({
  selector: 'app-formcoins',
  templateUrl: './formcoins.page.html',
  styleUrls: ['./formcoins.page.scss'],
})
export class FormcoinsPage implements OnInit {

  formcoins: FormGroup;
  isSubmitted: boolean;

  constructor(public formBuilder: FormBuilder, private router: Router) {
    this.isSubmitted = false;
  }

  ngOnInit() {
    this.formcoins = this.formBuilder.group({
      namecoin: ['', [Validators.required, Validators.minLength(2)]],
      //typeAd: [true, Validators.pattern('true')]
      codpostal: ['', [Validators.required, Validators.pattern('\\d{4}((-)\\d{3})')]],
      location: ['', [Validators.required,]],
      qtd: ['', [Validators.required,]],
      price: ['', [Validators.required,]],
      value: ['', [Validators.required,]]
    });
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.formcoins.valid) {
      return false;
    } else {
      console.log(this.formcoins.value);
      this.router.navigate(['formcoinscam']);
      console.log(this.formcoins.value.qtd);
    }
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get formControls() {
    return this.formcoins.controls;
  }

  continuetoformcoins(){
    //let infoMoeda: NavigationExtras;
    // eslint-disable-next-line prefer-const
    /*infoMoeda= {
      state:{
        dadosMoeda: this.dataMoedas[moedaKey]
      }
    };*/
    // eslint-disable-next-line eqeqeq
    if(this.isSubmitted==true) {
      this.router.navigate(['formcoinscam']);
      //nao funciona
    }
  }

}
