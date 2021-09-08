import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetalheImovelComponent } from './imoveis/detalhe-imovel/detalhe-imovel.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'imovel/:id',
        component: DetalheImovelComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class PagesRoutingModule {}
