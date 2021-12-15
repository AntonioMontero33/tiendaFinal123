import { Injectable } from '@angular/core';
import { DetalleReserva, detallesreservas } from 'src/app/modelo/detallereserva.class';
import { reservaactiva } from '../../entrega-pedidos/servicios.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class descripcionboletaService {

  constructor(private http:HttpClient) { 
    console.log(this.detallereserva)
  }
  detallereservalista:DetalleReserva[]=[]
 get detallereserva(){
  this.http.get<DetalleReserva[]>('http://localhost:8080/api/detallereserva').subscribe((resp:DetalleReserva[])=>{this.detallereservalista=resp});
  this.detallereservalista=this.detallereservalista.filter(elemen => elemen.getReservas.getcodReserva==reservaactiva[0].getcodReserva);
  return this.detallereservalista
 }
  

  total(detallereserva:DetalleReserva[]):number{
    let cant:number=0
    detallereserva.forEach(element => {
    cant = cant+(element.getproductoDetalleReserva.getprecioproductolocal*element.getcantiaddDEtalleReserva) 
    }); 
    console.log(this.detallereserva)
    console.log(reservaactiva[0])
    return cant
  }
}
