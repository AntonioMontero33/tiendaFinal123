import { Component, OnInit } from '@angular/core';
import { GestionProveedorservice } from './services/gestion-proveedor.service';
import { locales, Local } from '../../modelo/local.class';

@Component({
  selector: 'app-gestion-proveedor-main',
  templateUrl: './gestion-proveedor-main.component.html',
  styleUrls: ['./gestion-proveedor-main.component.css']
})
export class GestionProveedorMainComponent implements OnInit {

  constructor(
    private gestionProveedorservice:GestionProveedorservice
  ) { }

  eliminacion:number[]=[]

  nombreLocal:String=""
  ubicacionLocal:String=""
  rucLocal:String=""
  contrasenaLocal:String=""

  locales:Local[]=locales

  ngOnInit(): void {
  }

  
    agregar(){
      this.gestionProveedorservice.agregarproducto(this.nombreLocal,this.ubicacionLocal,this.rucLocal,this.contrasenaLocal)
    }
    eliminar(){
      this.gestionProveedorservice.eliminarproducto(this.eliminacion)
      this.eliminacion=[]
  
    }

}
