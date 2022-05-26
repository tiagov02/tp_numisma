import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Submeter uma moeda', url: '/formcoins', icon: 'mail' },
    { title: 'Ver moedas', url: '/moedas', icon: 'paper-plane' },
    { title: 'Favorites', url: '/registar', icon: 'heart' }
  ];
  //public labels = [];
  constructor() {}
}
