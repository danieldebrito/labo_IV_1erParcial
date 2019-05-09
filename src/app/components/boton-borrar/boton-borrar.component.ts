import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/class/producto';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-boton-borrar',
  templateUrl: './boton-borrar.component.html',
  styleUrls: ['./boton-borrar.component.css']
})
export class BotonBorrarComponent implements OnInit {

  @Input() productoBorrar: Producto;
  @Output() cargalista = new EventEmitter();

  constructor(private servProductos: ProductosService) { }

  borrar(){
    console.log(this.productoBorrar);
    this.servProductos.Eliminar(this.productoBorrar.idProducto).then( () => {
      this.cargalista.emit();
      // this.cargarLista();
      console.log('id a borrar:' + this.productoBorrar.idProducto);
    });
  }





  ngOnInit() {
  }

}
