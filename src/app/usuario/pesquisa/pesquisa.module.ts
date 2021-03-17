import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PesquisaRoutingModule } from './pesquisa.routing-module';
import { PesquisaComponent } from './pesquisa.component';
import { CampoPesquisaComponent } from './campo-pesquisa/campo-pesquisa.component';
import { BotoesComponent } from './botoes/botoes.component';
import { ResultadoComponent } from './resultado/resultado.component';

@NgModule({
  imports: [
    CommonModule,
    // FormsModule,
    ReactiveFormsModule,
    PesquisaRoutingModule,
  ],
  declarations: [PesquisaComponent, CampoPesquisaComponent, BotoesComponent, ResultadoComponent],
  providers: [],
})

export class PesquisaModule { }