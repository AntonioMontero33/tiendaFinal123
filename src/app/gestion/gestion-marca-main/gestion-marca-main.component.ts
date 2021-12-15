import { Component, OnInit } from '@angular/core';
import { marcas, Marca } from '../../modelo/marca.class';
import { GestionMarcaservice } from './services/gestion-marca.service';

@Component({
  selector: 'app-gestion-marca-main',
  templateUrl: './gestion-marca-main.component.html',
  styleUrls: ['./gestion-marca-main.component.css']
})
export class GestionMarcaMainComponent implements OnInit {

  constructor(
    private gestionmarcaservice:GestionMarcaservice
  ) { }

  nombreMarca:String=""
  ngOnInit(): void {
  }
  marcas:Marca[]=marcas
  eliminacion:number[]=[]
  
  eliminar(){
    this.gestionmarcaservice.eliminarmarca(this.eliminacion)
    this.eliminacion=[]
  }
  agregar(){
    this.gestionmarcaservice.agregarmarca(this.nombreMarca)
  }
  
}
