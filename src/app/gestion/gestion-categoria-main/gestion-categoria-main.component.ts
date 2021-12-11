import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../modelo/categoria.class';
import { GestionCategoriaservice } from './services/gestion-categoria.service';

@Component({
  selector: 'app-gestion-categoria-main',
  templateUrl: './gestion-categoria-main.component.html',
  styleUrls: ['./gestion-categoria-main.component.css']
})
export class GestionCategoriaMainComponent implements OnInit {

  constructor(
    public gestioncategoriaservice:GestionCategoriaservice,
    
  
    
  ) {
    this.gestioncategoriaservice.listarCategoria()
   }
  codcategoria:number=0
  nombreCategoria:String=""
   
 
  ngOnInit(): void {
    
  }
 
  async agregar(){
      this.gestioncategoriaservice.agregarcategoria(this.nombreCategoria)
      this.gestioncategoriaservice.listarCategoria();
      
    
    
  }
  eliminacion:number[]=[]
  async eliminar(){
    await this.gestioncategoriaservice.eliminarcategoria(this.eliminacion)
    this.eliminacion=[]
    await this.gestioncategoriaservice.listarCategoria();
  }
  async actualizar(){
    await this.gestioncategoriaservice.actualizarCategoria(this.codcategoria,this.nombreCategoria)
    await this.gestioncategoriaservice.listarCategoria();
  }
  actializarcategoria(categoria:Categoria){
    this.codcategoria=categoria.codCategoria
    this.nombreCategoria=categoria.nombreCategoria
  }
  

  
}

