import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-registar',
  templateUrl: './registar.page.html',
  styleUrls: ['./registar.page.scss'],
})
export class RegistarPage implements OnInit {

  formRegistar: FormGroup;
  isSubmitted: boolean;
  delayInMilliseconds = 2000;

  constructor(public formBuilder: FormBuilder, private router: Router) {
    this.isSubmitted = false;
  }

  ngOnInit() {
    this.formRegistar = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2),Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      username: ['', [Validators.required, Validators.minLength(5),Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(2),Validators.maxLength(10)]]
    });
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.formRegistar.valid) {
      return false;
    } else {
      console.log(this.formRegistar.value);
    }
  }

  registarUser() {
    this.isSubmitted = true;
    if (!this.formRegistar.valid) {
      return false;
    } else {
      new Promise(f => setTimeout(f, 2000));
      confirm("Utilizador registado com sucesso");
      this.router.navigate(['start']);
    }
  }



  voltarLogin(){
    this.router.navigate(['start']);
  }

  get formControls() {
    return this.formRegistar.controls;
  }
}
