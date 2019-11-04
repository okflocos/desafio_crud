import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Usuario } from '../models/usuario'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  readonly API_URL: string = "http://localhost:8000/api/usuario"  
  readonly HTTP_OPTIONS

  constructor(private http: HttpClient) { 
    this.HTTP_OPTIONS = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }

  getAll() {
    return this.http.get<Usuario[]>(this.API_URL, { headers: this.HTTP_OPTIONS })
  }

  get(id: number){
    return this.http.get<Usuario>(this.API_URL + '/' + id, { headers: this.HTTP_OPTIONS })
  }

  update(usuario: Usuario){
    return this.http.put<Usuario>(this.API_URL + '/' + usuario.id, usuario, { headers: this.HTTP_OPTIONS })
  }

  save(usuario: Usuario){
    return this.http.post<Usuario>(this.API_URL, usuario, { headers: this.HTTP_OPTIONS })
  }

  delete(id: number){
    return this.http.delete(this.API_URL + '/' + id, { headers: this.HTTP_OPTIONS })
  }
}
