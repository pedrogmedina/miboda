import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  pathApi = environment._ApiUrl;
  constructor(private http: HttpClient) { }

  enviarCorreo(nombre: string, correo: string, mensaje: string): Observable<any> {
    const url = `${this.pathApi}/send-email`;
    const body = { nombre, correo, mensaje };
    return this.http.post(url, body);
  }
}
