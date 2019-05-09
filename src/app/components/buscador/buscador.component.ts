import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Producto } from './../../class/producto';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {


  @Output() encontroArt = new EventEmitter();
  public producto: Producto;

  constructor( private ProductoService: ProductosService ) {
    this.producto = new Producto('', '', '', '', 0, '');
   }

  public traerUno() {
    console.log(this.producto.idProducto);
    this.ProductoService.TraerUno(this.producto.idProducto).subscribe(response => {
        console.log(response);
    },
        error => {
            console.error(error);
        });
}

public traerPordesc() {
  console.log( '=>', this.producto.descripcion);
  this.ProductoService.TraerPorDescrip(this.producto.descripcion).subscribe(response => {
    if(response.descripcion){
      this.producto = response;
      this.encontroArt.emit({prod: this.producto});
    }

    console.log(response);
  },
      error => {
          console.error(error);
      });
}

  ngOnInit() {
  }

}
