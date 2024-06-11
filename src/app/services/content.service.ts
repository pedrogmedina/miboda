import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection, orderBy, query } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Alojamiento } from '../interfaces/alojamiento';

@Injectable({
  providedIn: 'root'
})
export class ContentService {


constructor(private firestore: Firestore) { }
  
  getAlojamientosContent(): Observable<Alojamiento[]> {
      const alojamientoRef = collection(this.firestore, 'alojamientos');
      const filesOrdered = query(alojamientoRef, orderBy('id', 'asc'));
      
      return collectionData(filesOrdered, { idField : 'id'}) as Observable<Alojamiento[]>
  }
}
