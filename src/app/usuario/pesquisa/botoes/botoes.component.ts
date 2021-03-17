import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botoes',
  templateUrl: './botoes.component.html',
  styleUrls: ['./botoes.component.css']
})
export class BotoesComponent implements OnInit {

  @Output()
  tipoRepositorio = new EventEmitter();

  @Input()
  loading = false;

  constructor() { }

  ngOnInit(): void {
  }

  escolhe(tipo: string) {
    this.tipoRepositorio.emit(tipo);
  }

  recebeLoading(event: boolean) {
    this.loading = event;
  }



}
