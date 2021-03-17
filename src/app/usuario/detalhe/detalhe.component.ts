import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  dadosUsuario: any = {};
  formUsuario: FormGroup;

  constructor(private builder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private route: Router) { }

  ngOnInit(): void {
    this.dadosUsuario = this.activatedRoute.snapshot.data.usuario;
    this.initForm();
  }

  private initForm() {
    this.formUsuario = this.builder.group({
      'login': [this.dadosUsuario.usuario.login],
      'nome': [this.dadosUsuario.usuario.nome],
      'bio': [this.dadosUsuario.usuario.bio],
      'blog': [this.dadosUsuario.usuario.blog],
      'location': [this.dadosUsuario.usuario.location],
      'url': [this.dadosUsuario.usuario.url],
      'email': [this.dadosUsuario.usuario.email]
    })
  }

  volta() {
    this.route.navigate(['pesquisa']);
  }
}
