import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ReversaMainComponent } from './reversa-main/reversa-main.component';
import { ReservaService } from './services/reserva.service';
import { AppRoutingModule } from '../app-routing.module';
import {HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ReversaMainComponent
  ],
  exports:[
    ReversaMainComponent,
    HttpClientModule
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers:[
    ReservaService,
    
  ]
})
export class ReversaModule { }
