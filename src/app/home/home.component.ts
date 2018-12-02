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
  public tipoImagen = {
      portada:null,
      nosotros:null,
      galeriaInstagram:null
    };
  public dirNum: number = 0;
  public directorio = [
    {
      titulo: '4',
      nombre: 'Fernanda Sesto',
      trabajasEn: 'Area de Testing',
      pasion: 'El desarrollo comunitario y la resolucion de problemas.',
      rol: 'Fundadora y Lider dentro del area de gestion.',
      porQueIEA: 'Porque quiero vivir en un mundo en donde todos tengamos acceso a las mismas oportunidades. La brecha digital tiene que terminar.',
      electrodomestico: 'Cafetera',
      imagen: '33'
    },
    {
      titulo: '1',
      nombre: 'Gimena Alamon',
      trabajasEn: 'Estudio Ingenieria y trabajo en una empresa de software.',
      pasion: 'Preguntar a Gime.....',
      rol: 'Lider en el area de contenidos.',
      porQueIEA: 'Porque es la oportunidad perfecta para hacer algo que nos llena, no siendo los unicos beneficiados, lo cual duplica la recompensa.',
      electrodomestico: 'Heladera',
      imagen: '48'
    },
    {
      titulo: '3',
      nombre: 'Agustin Casenave',
      trabajasEn: 'Estudio Ingenieria y trabajo como desarrollador.',
      pasion: 'Musica y libros.',
      rol: 'Lider en el area de Tech.',
      porQueIEA: 'Me parece que es una manera de ayudar a la sociedad en lo que uno puede.',
      electrodomestico: 'Heladera, porque amo comer.',
      imagen: '40'
    },
    {
      titulo: '2',
      nombre: 'Nicolas Colombo.',
      trabajasEn: 'Estudio Medicina y programacion',
      pasion: 'Aprender.',
      rol: 'Lider en el area de voluntariado.',
      porQueIEA: 'Porque disfruto ayudando a los demas.',
      electrodomestico: 'Air Fryer.',
      imagen: '6'
    }
  ];

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
      reader.onloadend = () => {
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

  cambioDir(movimiento){
    if(movimiento === 'SIG'){
      if(this.dirNum != this.directorio.length -1){
        this.dirNum++;
      }
      else{
        this.dirNum = 0;
      }
    }
    else{
      if(this.dirNum != 0){
        this.dirNum--;
      }
      else{
        this.dirNum = this.directorio.length -1;
      }
    }
    return false;
  }

}
