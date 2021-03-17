import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  tipoRepositorio = 'usuario';
  repositorios: any[] = [];
  maisVistos: any[] = [];
  dadosUsuario: any;
  loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  recebeTipo(event: any) {
    this.tipoRepositorio = event;
  }

  async recebeDados(event: any) {
    this.dadosUsuario = event;
  }

  recebeLoading(event: boolean) {
    this.loading = event;
  }

}
