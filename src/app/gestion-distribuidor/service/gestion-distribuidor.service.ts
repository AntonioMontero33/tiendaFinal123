import { Injectable } from '@angular/core';
import { productoslocal, ProductoLocal } from '../../modelo/productolocal.class';
import { productos, Producto } from '../../modelo/producto.class';
import { localactivo } from '../../login/login-main/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class GestionDistribuidorService {

  constructor() { }
  

  get getproductofaltantes(){
    const productoslocalfaltante:Producto[]=productos
    const productosenlocal:ProductoLocal[]=productoslocal.filter(element=>element.getlocalProductoLocal==localactivo[0])
    const productosfaltantes:Producto[]=[]
    let result:Producto[]=[]
    productosenlocal.forEach(element => {
      productosfaltantes.push(element.getproducto)
    });
    result = productoslocalfaltante.filter(el => !productosfaltantes.includes(el))
    return result
  }
  
  
 
  

  agregar(producto:Producto,precio:number){
    const nuevoproductolocal:ProductoLocal=new ProductoLocal("PL001",precio,localactivo[0],producto)
    productoslocal.push(nuevoproductolocal)
  }

}
