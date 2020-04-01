import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion;
  id: string;

  constructor( private route: ActivatedRoute,
               public productoService: ProductosService ) { }

  ngOnInit(): void {

    // Subscribe estar pendiente de todos los cambios que se realicen el los parametros
    this.route.params
        .subscribe( parametros => {
          // Solo queremos seleccionar el id
          // tslint:disable-next-line: no-string-literal
          // console.log(parametros['id']);

          // tslint:disable-next-line: no-string-literal
          this.productoService.getProducto(parametros['id'])
              .subscribe( (producto: ProductoDescripcion) => {
                // tslint:disable-next-line: no-string-literal
                this.id = parametros['id'];
                this.producto = producto;
                // console.log(producto);
              });
        });
  }

}
