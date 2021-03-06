import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private firestore: AngularFirestore) { }

  getMovies() {
    return this.firestore.collection('peliculas').snapshotChanges();
  }

  getSeries(id: string) {
    return this.firestore.collection('series').ref.where('serie', '==', id).get();
  }
}
