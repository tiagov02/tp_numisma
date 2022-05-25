import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  Form: FormGroup;
  isSubmitted: boolean;

  constructor(public formBuilder: FormBuilder, private router: Router) {
    this.isSubmitted = false;
  }

  ngOnInit() {
    this.Form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(2),Validators.maxLength(10)]]
    });
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.Form.valid) {
      return false;
    } else {
      console.log(this.Form.value);
      this.router.navigate(['moedas']);
    }
  }

  registar(){
    this.router.navigate(['registar']);
  }

  get formControls() {
    return this.Form.controls;
  }

}
