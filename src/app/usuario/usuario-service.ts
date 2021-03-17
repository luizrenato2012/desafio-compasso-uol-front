import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

const URL = 'https://api.github.com/users';
@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  async findDados(nome: string) {
    try {
      let dados: any = {};
      let user = await this.findUsuario(nome);
      dados.usuario = user ? {
        login: user.login,
        nome: user.name,
        url: user.url,
        bio: user.bio,
        blog: user.blog,
        email: user.email,
        location: user.location

      } : null;
      dados.repositorios = await this.findRepositorios(nome);
      dados.maisVistos = await this.findMaisVistos(nome);
      return dados;
    } catch (error) {
      console.log(error);
      return {};
    }
  }

  async findUsuario(login: string): Promise<any> {
    return await this.http.get<any>(`${URL}/${login}`).toPromise();
  }

  async findRepositorios(nome: string): Promise<any> {
    return await this.http.get<any>(`${URL}/${nome}/repos`).toPromise();
  }

  async findMaisVistos(nome: string): Promise<any> {
    return await this.http.get<any>(`${URL}/${nome}/starred`).toPromise();
  }

  // dados.usuario = {
  //   id: 12,
  //   nome: 'Luiz Renato',
  // };

  // dados.repositorios = [
  //   { id: 1, name: 'Repositorio 1' },
  //   { id: 2, name: 'Repositorio 2' },
  //   { id: 3, name: 'Repositorio 3' },
  //   { id: 4, name: 'Repositorio 4' },
  //   { id: 5, name: 'Repositorio 5' },
  // ];

  // dados.maisVistos = [
  //   { id: 6, name: 'Repositorio 6' },
  //   { id: 7, name: 'Repositorio 7' },
  //   { id: 8, name: 'Repositorio 8' },
  //   { id: 9, name: 'Repositorio 9' },
  // ];
  // return of(dados).pipe(
  //   delay(3000)
  // );
}
