import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {StartPageModule} from "./start/start.module";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'form-coins',
    loadChildren: () => import('./form-coins/form-coins.module').then(m => m.FormCoinsPageModule)
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
  }
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
