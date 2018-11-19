import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  items: Observable<any>

  constructor(private firestore: AngularFirestore) {

  }

  setImagen(imagen, seccion) {
    const document = this.firestore.doc('imagenes/' + seccion);

    document.set({
      nombre: seccion,
      imagen: imagen,
    }).then(() => {
      // Document created successfully.
    });
  }

  getImagen(seccion) {
    const document = this.firestore.doc('imagenes/' + seccion);

    return document.get();
  }

  getAllImages(){
    const document = this.firestore.collection('imagenes/');

    return document.get();
  }

}
