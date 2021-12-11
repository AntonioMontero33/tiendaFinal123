import { Injectable } from '@angular/core';
import { Categoria} from '../../modelo/categoria.class';
import { Router } from '@angular/router';
import { GestionCategoriaservice } from '../../gestion/gestion-categoria-main/services/gestion-categoria.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private route:Router,public gestioncategoriaservice:GestionCategoriaservice) { }
  categoriass:Categoria[]=GestionCategoriaservice.categorias
  

  ingresar(categoria:Categoria){
    
    categoriaActiva.splice(0,1)
    categoriaActiva.push(categoria)
  }
}
export const categoriaActiva:Categoria[]=[]