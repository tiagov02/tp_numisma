import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  form: FormGroup;
  isSubmitted: boolean;

  constructor(public formBuilder: FormBuilder) {
    this.isSubmitted = false;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(2),Validators.maxLength(10)]]
    });
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.form.valid) {
      return false;
    } else {
      console.log(this.form.value);
    }
  }

  get formControls() {
    return this.form.controls;
  }

}
