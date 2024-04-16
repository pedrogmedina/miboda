import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Firestore, collection,addDoc } from '@angular/fire/firestore';
import { Invitado } from '../interfaces/invitado'

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private firestore: Firestore) { }
  createInvitado(invitado: Invitado) {
    const invitadoRef = collection(this.firestore, 'invitados');
    return addDoc(invitadoRef, invitado);
  }
}
