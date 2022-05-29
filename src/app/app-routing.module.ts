import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {StartPageModule} from "./start/start.module";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'formcoins',
    loadChildren: () => import('./formcoins/formcoins.module').then(m => m.FormcoinsPageModule)
  },
  {
    path: 'moedaexpandida',
    loadChildren: () => import('./moedaexpandida/moedaexpandida.module').then( m => m.MoedaexpandidaPageModule)
  },
  {
    path: 'moedas',
    loadChildren: () => import('./moedas/moedas.module').then( m => m.MoedasPageModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'registar',
    loadChildren: () => import('./registar/registar.module').then( m => m.RegistarPageModule)
  },
  {
    path: 'formcoinscam',
    loadChildren: () => import('./formcoinscam/formcoinscam.module').then( m => m.FormcoinscamPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },  {
    path: 'messages',
    loadChildren: () => import('./messages/messages.module').then( m => m.MessagesPageModule)
  }



];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
