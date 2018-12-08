import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { BaseService } from './base.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit {
  public loading : boolean = false;
  public decode = "data:image/png;base64,";
  public tipoImagen = {
    portada: null,
    nosotros: null,
    galeriaInstagram: null,
    imagenes:null
  };
  public dirNum: number = 0;
  public perfNum: number = 0;
  public galeriaNum: number = 50;
  public perfiles: any = [
    {
      titulo: 'Tech',
      tareas: 'Administrar redes, de la creación y el mantenimiento de nuestra web y la preparación del hadware/software para los talleres.',
      lider: 'Agustín Casenave',
      imagen: 'tech',
      icon: 'fa-cogs'
    },
    {
      titulo: 'Contenido',
      tareas: 'Crear material didáctico y recreativo para la realización de los talleres. Tanto para los niños como para los voluntarios que asisten a dichos talleres.',
      lider: 'Gimena Alamón',
      imagen: 'contenido',
      icon: 'fa-suitcase'
    },
    {
      titulo: 'Gestión',
      tareas: 'La organización de IEA, administrar los recursos (humanos y materiales), logística de las actividades sociales y difusión empresarial.',
      lider: 'Fernanda Sesto',
      imagen: 'gestion',
      icon: 'fa-line-chart'
    },
    {
      titulo: 'Voluntariado',
      tareas: 'Planificar estrategias para captar mas voluntarios, realizar campañas de recolección de materiales y actividades para fomentar el trabajo en equipo.',
      lider: 'Nicolás Colombo.',
      imagen: 'voluntariado',
      icon: 'fa-thumbs-up'
    }
  ];

  public directorio = [
    {
      titulo: '4',
      nombre: 'Fernanda Sesto',
      trabajasEn: 'Area de Testing',
      pasion: 'El desarrollo comunitario y la resolución de problemas.',
      rol: 'Fundadora y Lider dentro del área de gestión.',
      porQueIEA: 'Porque quiero vivir en un mundo en donde todos tengamos acceso a las mismas oportunidades. La brecha digital tiene que terminar.',
      electrodomestico: 'Cafetera',
      imagen: '33'
    },
    {
      titulo: '1',
      nombre: 'Gimena Alamon',
      trabajasEn: 'Estudio Ingeniería y trabajo en una empresa de software.',
      pasion: 'Me gusta la tecnología y el poder enseñar a los demás.',
      rol: 'Lider en el área de contenidos.',
      porQueIEA: 'Porque es la oportunidad perfecta para hacer algo que nos llena, no siendo los únicos beneficiados, lo cual duplica la recompensa.',
      electrodomestico: 'Heladera',
      imagen: '48'
    },
    {
      titulo: '3',
      nombre: 'Agustín Casenave',
      trabajasEn: 'Estudio Ingeniería y trabajo como desarrollador.',
      pasion: 'Musica y libros.',
      rol: 'Lider en el área de Tech.',
      porQueIEA: 'Me parece que es una manera de ayudar a la sociedad en lo que uno puede.',
      electrodomestico: 'Heladera, porque amo comer.',
      imagen: '40'
    },
    {
      titulo: '2',
      nombre: 'Nicolas Colombo.',
      trabajasEn: 'Estudio Medicina y programacion',
      pasion: 'Aprender.',
      rol: 'Lider en el área de voluntariado.',
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
    this.loading = true;
    this.baseService.getAllImages().subscribe(res => {
      this.tipoImagen['portada'] = null;
      this.tipoImagen['nosotros'] = null;
      this.tipoImagen['galeriaInstagram'] = null;

      res.docs.forEach(element => {
        let data = element.data();
        switch (data.nombre) {
          case 'portada': {
            let obj = Object.assign({}, data);
            this.tipoImagen['portada'] = obj;
            break;
          }
          case 'nosotros': {
            let obj = Object.assign({}, data);
            this.tipoImagen['nosotros'] = obj;
            break
          }
          case 'galeriaInstagram': {
            let obj = Object.assign({}, data);
            this.tipoImagen['galeriaInstagram'] = obj;
            break;
          }
          default:{
            let obj = Object.assign({}, data);
            this.tipoImagen['imagenes']
          }

        }
        console.log(this.tipoImagen);
      });
      this.loading = false;
    },
    error => {
      this.loading = false;
    });
  }

  navegar(ruta) {
    window.open(ruta,'_blank');
    return false;
  }

  cambioDir(movimiento) {
    if (movimiento === 'SIG') {
      if (this.dirNum != this.directorio.length - 1) {
        this.dirNum++;
      }
      else {
        this.dirNum = 0;
      }
    }
    else {
      if (this.dirNum != 0) {
        this.dirNum--;
      }
      else {
        this.dirNum = this.directorio.length - 1;
      }
    }
    return false;
  }

  cambioGaleria(movimiento){
    if (movimiento === 'SIG') {
      if (this.galeriaNum != 56) {
        this.galeriaNum++;
      }
      else {
        this.galeriaNum = 1;
      }
    }
    else {
      if (this.galeriaNum != 1) {
        this.galeriaNum--;
      }
      else {
        this.galeriaNum = 56;
      }
    }
    return false;
  }

  scroll(hash:string){
    window.location.hash = hash;
    return false;
  }

}
