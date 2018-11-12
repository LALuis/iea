import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import {GaleriaComponent} from './galeria/galeria.component';

const routes: Routes = [
  {
    path:'', redirectTo:'home', pathMatch:'full'
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'galeria', component:GaleriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }