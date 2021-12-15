import { Component, OnInit } from '@angular/core';
import { Gestionproductoservice } from './services/gestion-producto.service';
import { productos, Producto } from '../../modelo/producto.class';
import { Categoria} from '../../modelo/categoria.class';
import { Marca, marcas } from '../../modelo/marca.class';
import { GestionCategoriaservice } from '../gestion-categoria-main/services/gestion-categoria.service';

@Component({
  selector: 'app-gestion-producto-main',
  templateUrl: './gestion-producto-main.component.html',
  styleUrls: ['./gestion-producto-main.component.css']
})
export class GestionProductoMainComponent implements OnInit {

  constructor(
    private gestionproductoservice:Gestionproductoservice,
    private gestioncategoriaservice:GestionCategoriaservice
  ) { }
  eliminacion:number[]=[]
  nombreProducto:string=""
  mililitrosProducto:number=0
  descripcionProducto:String=""
  volalcoholProducto:number=0
  imagenProducto:String=""
  marcaProducto:Marca=marcas[0]
  categoriaProducto:Categoria=GestionCategoriaservice.categorias[0]

  marcas:Marca[]=marcas
  categorias:Categoria[]=GestionCategoriaservice.categorias
  productos:Producto[]=productos
  ngOnInit(): void {
  }
  agregar(){
    this.gestionproductoservice.agregarproducto(this.nombreProducto,this.mililitrosProducto,this.descripcionProducto,this.volalcoholProducto,this.imagenProducto,this.marcaProducto,this.categoriaProducto)
  }
  eliminar(){
    this.gestionproductoservice.eliminarproducto(this.eliminacion)
    this.eliminacion=[]

  }
}
