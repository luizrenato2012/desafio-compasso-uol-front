import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioResolver } from './usuario/usuario-resolver';


const routes: Routes = [
  {
    path: 'pesquisa',
    loadChildren: () =>
      import('./usuario/pesquisa/pesquisa.module').then(
        (m) => m.PesquisaModule
      ),
  },
  {
    path: 'detalhe/:login',
    loadChildren: () =>
      import('./usuario/detalhe/detalhe.module').then(
        (m) => m.DetalheModule
      ),
    resolve: {
      usuario: UsuarioResolver
    }
  },
  {
    path: '',
    redirectTo: '/pesquisa',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
