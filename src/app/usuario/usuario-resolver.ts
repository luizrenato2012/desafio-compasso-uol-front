import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UsuarioService } from './usuario-service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class UsuarioResolver implements Resolve<Observable<any>>{

  constructor(private service: UsuarioService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<Observable<any>> | Promise<Observable<any>> {
    const login = route.params['login'];
    return this.service.findDados(login);
  }

}