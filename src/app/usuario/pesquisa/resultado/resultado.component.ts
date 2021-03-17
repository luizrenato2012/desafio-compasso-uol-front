import { Component, OnInit, Input } from '@angular/core';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  @Input()
  tipo: string = 'usuario';

  @Input()
  dados: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  get isRepositorioUsuario() {
    return this.tipo === 'usuario';
  }

  get isRepositorioMaisAcessado() {
    return this.tipo === 'mais';
  }

  get repositorios() {
    return this.dados ? this.dados.repositorios : [];
  }

  get maisVistos() {
    return this.dados ? this.dados.maisVistos : [];
  }

  get nome() {
    return (this.dados && this.dados.usuario) ? this.dados.usuario.nome : '';
  }

  get login() {
    return (this.dados && this.dados.usuario) ? this.dados.usuario.login : '';
  }

}
