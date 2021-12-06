import { Component, OnInit } from '@angular/core';
import { productoslocal, ProductoLocal } from '../../modelo/productolocal.class';
import { ProductoService } from '../services/producto.service';
import { Categoria } from '../../modelo/categoria.class';
import { GestionCategoriaservice } from '../../gestion/gestion-categoria-main/services/gestion-categoria.service';

@Component({
  selector: 'app-productos-main',
  templateUrl: './productos-main.component.html',
  styleUrls: ['./productos-main.component.css']
})
export class ProductosMainComponent implements OnInit {

  constructor(public productoService:ProductoService,public gestioncategoriaservice:GestionCategoriaservice) {   
  }


  ngOnInit(): void {
  }

  categorias:Categoria[]=this.gestioncategoriaservice.categorias

    
}
