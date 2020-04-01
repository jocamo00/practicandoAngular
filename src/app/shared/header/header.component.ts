import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor( public _servicio: InfoPaginaService ) { }

  ngOnInit(): void {
  }


  buscarProducto( termino: string ) {
      console.log(termino);
  }

}
