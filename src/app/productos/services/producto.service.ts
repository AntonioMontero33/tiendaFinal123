import { Injectable, OnInit } from '@angular/core';
import { Categoria } from "src/app/modelo/categoria.class";
import { DetalleReserva, detallesreservas } from "src/app/modelo/detallereserva.class";
import { ProductoLocal} from "src/app/modelo/productolocal.class";
import { reservas } from "src/app/modelo/reserva.class";
import { categoriaActiva } from '../../categoria/services/categoria.service';
import { Producto, productos } from '../../modelo/producto.class';
import { usuarioactivo, localactivo, adminactivo } from '../../login/login-main/services/login.service';
import { InitialNavigation, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductoService {
constructor(private route:Router,private http:HttpClient) { 
    this.http.get<ProductoLocal[]>('http://localhost:8080/api/productolocal').subscribe((resp:ProductoLocal[])=>{this.productoslocal=resp;console.log(resp)});
}
productoslocal:ProductoLocal[]=[];


agregar(productolocal:ProductoLocal){
const nuevodetallereserva = new DetalleReserva('R0001',1,productolocal,reservas[0])   
detallesreservas.push(nuevodetallereserva)
}
usuarioactivo=usuarioactivo
localactivo=localactivo
adminactivo=adminactivo
categoria=categoriaActiva
login(){
    this.route.navigate(['login'])
}
filtrar(){

    if(this.categoria.length==0){
        return this.productoslocal
    }
    else{

        const categoriaproducto:ProductoLocal[]=this.productoslocal.filter(elemen => (elemen.getproducto.getcategoriaproducto == this.categoria[0]))
        return categoriaproducto
    }
    
}

}

// const productocategoria:Categoria[]=[]
