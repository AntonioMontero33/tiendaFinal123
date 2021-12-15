import { Injectable } from "@angular/core";
import { marcas, Marca } from '../../../modelo/marca.class';

@Injectable()
export class GestionMarcaservice{
    agregarmarca(nombreMarca:String){
        const nuevoMarca:Marca=new Marca("M00"+(marcas.length+1),nombreMarca)
        marcas.push(nuevoMarca);
    }
    eliminarmarca(eliminacion:number[]){
        eliminacion.sort(function(a, b){return b - a});
        for(let i:number=0;eliminacion.length>i;i++){
            marcas.splice(eliminacion[i],1)
            
          }
    }
}
