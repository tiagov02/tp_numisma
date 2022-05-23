import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable, timer} from 'rxjs';
import {map} from 'rxjs/operators';

interface TypeAd {
  id: number;
  name: string;
}

@Component({
  selector: 'app-formcoins',
  templateUrl: './formcoins.page.html',
  styleUrls: ['./formcoins.page.scss'],
})
export class FormcoinsPage implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

}
