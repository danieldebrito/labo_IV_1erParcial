import { Producto } from './../../class/producto';
import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public listado: Producto[];

  constructor( private ProductoService: ProductosService ) { }

   traerTodos() {
    this.ProductoService.listar()
    .then(datos => {
      console.log('listado de productos:', datos);
      this.listado = datos;
    });
   }

   public cargarLista() {
    this.ProductoService.listar()
    .then(datos => {
      console.log('listado de productos:', datos);
      this.listado = datos;
    });
   }

  ngOnInit() {
    this.cargarLista();
  }

}
