import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseService } from './base.service';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { AngularFirestore } from 'angularfire2/firestore';
import {PrimengModule } from '../primeng/primeng.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    PrimengModule
  ],
  declarations: [HomeComponent, GaleriaComponent],
  providers:[AngularFirestore, HomeComponent]
})
export class HomeModule { }
