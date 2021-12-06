import { Injectable } from "@angular/core";
import { Categoria } from '../../../modelo/categoria.class';
import { HttpClient} from '@angular/common/http';
import { GestionCategoriaMainComponent } from '../gestion-categoria-main.component';


@Injectable({
    providedIn:'root'
}
)
export class GestionCategoriaservice{
    constructor(private http:HttpClient){}
        agregarcategoria(nombreCategoria:String){
            const nuevacategoria:Categoria=new Categoria(0,nombreCategoria)
            this.http.post<Categoria[]>('http://localhost:8080/api/categoria',nuevacategoria).subscribe();
            
    }

    eliminarcategoria(eliminacion:number[]){
        
        for(let i:number=0;eliminacion.length>i;i++){
            this.http.delete('http://localhost:8080/api/categoria'+'/'+eliminacion[i]).subscribe();
            
            
          }
    }
    public categorias:Categoria[]=[];
    listarCategoria(){
        this.http.get<Categoria[]>('http://localhost:8080/api/categoria').subscribe((resp:Categoria[])=>{this.categorias=resp});
    }
    actualizarCategoria(codcategoria:number,nombreCategoria:String){
        const nuevacategoria:Categoria=new Categoria(codcategoria,nombreCategoria)
        this.http.put<any>('http://127.0.0.1:8080/api/categoria' + '/' + codcategoria, nuevacategoria).subscribe();
    }
}