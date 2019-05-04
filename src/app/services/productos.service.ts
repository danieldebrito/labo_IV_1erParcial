import { Injectable } from '@angular/core';
import { Producto } from '../class/producto';
import { HttpRouteBaseService } from '../services/http-route-base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public Productos: Producto;

  constructor(public miHttp: HttpRouteBaseService) { }

  public listar(): Promise<Array<any>> {
    return this.miHttp.httpGetP('/producto/')
      .then(data => {
        console.log( 'promise listar ======> ', data);
        return data;
      })
      .catch(err => {
        console.log( 'error de listar ===> ', err);
        return null;
      });
  }
}
