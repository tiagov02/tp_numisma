import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Página Principal', url: '/moedas', icon: 'home' },
    { title: 'Anunciar', url: '/formcoins', icon: 'trending-up' },
    { title: 'Sair', url: '/confirmacaosaida', icon: 'log-out'}
  ];
  constructor() {}

}
