import { Component, OnInit } from '@angular/core';
import Instafeed from 'instafeed.js';
import { HttpClient } from '@angular/common/http';
import { HomeComponent } from '../home.component';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {
  public secciones = ['portada', 'nosotros', 'galeriaInstagram'];
  tipoImagenSeleccionada: string = 'portada';

  constructor(private http: HttpClient, private hm:HomeComponent) {
  }

  ngOnInit() {
  }

  subirImagen(event){
    this.hm.subirImagen(event,this.tipoImagenSeleccionada);
  }

}
