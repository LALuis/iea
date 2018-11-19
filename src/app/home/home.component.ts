import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { BaseService } from './base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit {

  public decode = "data:image/png;base64,";
  public tipoImagen = [];

  constructor(private baseService: BaseService, private router: Router) {
  }

  ngOnInit() {
    this.getAllImages();
  }


  subirImagen(event, tipoImagenSeleccionada) {
    let reader = new FileReader();
    //Checkeamos que se seleccione un archivo
    if (event.target.files && event.target.files.length > 0) {
      //Seleccionamos la primera imagen, podriamos subir muchas
      let imagen = event.target.files[0];
      reader.readAsDataURL(imagen);
      reader.onload = () => {
        let secciondeImagen = '';
        this.baseService.setImagen(reader.result.split(',')[1], tipoImagenSeleccionada);
        this.getAllImages();
      }
      reader.onloadend = () =>{
        reader.abort();
      }
    }
  }

  getAllImages() {
    this.baseService.getAllImages().subscribe(res => {
      this.tipoImagen['portada'] = null;
      this.tipoImagen['nosotros'] = null;
      this.tipoImagen['galeriaInstagram'] = null;

      res.docs.forEach(element => {
        let data = element.data();
        switch (data.nombre) {
          case 'portada': {
            let obj = Object.assign({}, data)
            this.tipoImagen['portada'] = obj;
            break;
          }
          case 'nosotros': {
            let obj = Object.assign({}, data)
            this.tipoImagen['nosotros'] = obj;
            break
          }
          case 'galeriaInstagram': {
            let obj = Object.assign({}, data)
            this.tipoImagen['galeriaInstagram'] = obj;
            break;
          }
        }
        console.log(this.tipoImagen);
      });
    })
  }

  navegar(ruta) {
    this.router.navigateByUrl(ruta);
    return false;
  }

}
