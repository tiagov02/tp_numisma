import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registar',
  templateUrl: './registar.page.html',
  styleUrls: ['./registar.page.scss'],
})
export class RegistarPage implements OnInit {

  formRegistar: FormGroup;
  isSubmitted: boolean;

  constructor(public formBuilder: FormBuilder) {
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
  get formControls() {
    return this.formRegistar.controls;
  }
}
