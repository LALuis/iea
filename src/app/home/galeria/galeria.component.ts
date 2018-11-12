import { Component, OnInit } from '@angular/core';
import Instafeed from 'instafeed.js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {
  token:string = '8160155436.1677ed0.2b9355905c274b68964d705a2c4faa2d';

  constructor(private http: HttpClient) {


    http.get('https://api.instagram.com/v1/media/search?lat=48.858844&lng=2.294351&access_token=' + this.token).subscribe(
      e =>{
        console.log(e);
      }
    )


    // var feed = new Instafeed({
    //   get: 'tagged',
    //   tagName: 'luis199552',
    //   clientId: '926c2ffbb5d4485390c11ff30e8ea648',
    //   accessToken: '8160155436.1677ed0.2b9355905c274b68964d705a2c4faa2d'
    // });
    // feed.run();
  }

  ngOnInit() {
  }

}
