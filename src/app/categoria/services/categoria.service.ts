import { Injectable, OnInit } from '@angular/core';
import { Categoria} from '../../modelo/categoria.class';
import { Router } from '@angular/router';
import { GestionCategoriaservice } from '../../gestion/gestion-categoria-main/services/gestion-categoria.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {


  constructor(private route:Router,public gestioncategoriaservice:GestionCategoriaservice,private http:HttpClient) {
    this.http.get<Categoria[]>('http://localhost:8080/api/categoria').subscribe((resp:Categoria[])=>{this.categorias=resp});
   }
  categorias:Categoria[]=[]
  get categoriass(){
    
    console.log(this.categorias)
    return this.categorias
  }
  
  

  ingresar(categoria:Categoria){
    
    categoriaActiva.splice(0,1)
    categoriaActiva.push(categoria)
  }
}
export const categoriaActiva:Categoria[]=[]