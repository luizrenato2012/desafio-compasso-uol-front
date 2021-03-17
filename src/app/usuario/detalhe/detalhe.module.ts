import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalheRoutingModule } from './detalhe.routing-module';
import { DetalheComponent } from './detalhe.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DetalheRoutingModule,
  ],
  declarations: [DetalheComponent],
  providers: [],
})
export class DetalheModule {

}