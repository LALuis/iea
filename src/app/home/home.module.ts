import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule
  ],
  declarations: [HomeComponent, GaleriaComponent]
})
export class HomeModule { }
