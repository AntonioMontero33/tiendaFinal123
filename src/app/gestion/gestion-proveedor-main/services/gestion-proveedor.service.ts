import { Injectable } from "@angular/core";
import { Local, locales } from '../../../modelo/local.class';

@Injectable()
export class GestionProveedorservice{
    agregarproducto(nombreLocal:String,ubicacionLocal:String,rucLocal:String,contraseñaLocal:String){
        const nuevoProducto:Local=new Local("L000"+(locales.length+1),nombreLocal,ubicacionLocal,rucLocal,contraseñaLocal)
        locales.push(nuevoProducto);
    }
    eliminarproducto(eliminacion:number[]){
        eliminacion.sort(function(a, b){return b - a});
        for(let i:number=0;eliminacion.length>i;i++){
            locales.splice(eliminacion[i],1)
            
          }
    }
}