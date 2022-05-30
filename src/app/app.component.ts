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
    //{ title: 'Mensagens', url: '/registar', icon: 'chatbubbles' },
    //{ title: 'Meus Anúncios', url: '/registar', icon: 'bag' },
    //{ title: 'Perfil', url: '/registar', icon: 'person-circle' },
    { title: 'Sair', url: '/confirmacaosaida', icon: 'log-out'}
    //{title: 'Ver moedas',url:'/moedas',icon:'bag'}
    //Comentei esta parte, quando acabarmos como já esta feito descomentamos
  ];
  constructor() {}

}
