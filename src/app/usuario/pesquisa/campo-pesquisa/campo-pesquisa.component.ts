import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UsuarioService } from '../../usuario-service';

@Component({
  selector: 'app-campo-pesquisa',
  templateUrl: './campo-pesquisa.component.html',
  styleUrls: ['./campo-pesquisa.component.css']
})
export class CampoPesquisaComponent implements OnInit {

  @Output() dados = new EventEmitter();
  @Output() loading = new EventEmitter();

  formPesquisa: FormGroup;

  constructor(private builder: FormBuilder,
    private service: UsuarioService) { }

  ngOnInit(): void {
    this.formPesquisa = this.builder.group({
      'argumento': ['']
    })
  }

  async enviaDados() {
    this.loading.emit(true);
    let argumento = this.formPesquisa.get('argumento').value;
    let resultado = await this.service.findDados(argumento);
    this.loading.emit(false);
    this.dados.emit(resultado);
  }

}
