import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { Page404Component } from './modules/base/errors/page404/page404.component';
export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },

  /*  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/base/auth/auth.module').then((m) => m.AuthModule),
  },
    { path: 'encomendas', component: EncomendasListaComponent },
    { path: 'encomendas/:id', component: EncomendaComponent }, 
  { path: '**', component: Page404Component },*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
