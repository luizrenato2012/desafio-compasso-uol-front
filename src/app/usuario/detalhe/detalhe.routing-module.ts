import { Routes, RouterModule } from '@angular/router';
import { DetalheComponent } from './detalhe.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: DetalheComponent,
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalheRoutingModule { }