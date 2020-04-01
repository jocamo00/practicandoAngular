import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];

  constructor( private http: HttpClient ) {

    this.cargarProductos();
  }

  private cargarProductos() {

    return new Promise( ( resolve, reject ) => {
      this.http.get('https://angular-html-9f6ac.firebaseio.com/productos_idx.json')
        .subscribe( (resp: Producto[]) => {
          this.productos = resp;
          // console.log(resp);
          this.cargando = false;
          resolve();
        });
    });
  }

  getProducto( id: string ) {
    return this.http.get(`https://angular-html-9f6ac.firebaseio.com/productos/${ id }.json`);
  }

  buscarProducto( termino: string ) {

    if ( this.productos.length === 0) {
      // esperar a cargar los productos
      this.cargarProductos().then ( () => {
        // ejecutar despues de tener los productos
        // aplicar filtro
      });
    } else {
      // aplicar el filtro
    }
    this.productosFiltrado = this.productos.filter( producto => {
      return true;
    });

    console.log( this.productosFiltrado );
  }
}
