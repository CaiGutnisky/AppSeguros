import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Propietario } from './propietario';
import { environment } from "../environments/environment";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropietariosService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getPropietarios():Observable<Propietario[]> {
    return this.http.get<Propietario[]>(`${this.baseUrl}/getAll.php`);
  }

  getPropietario(id: string | number) {
    return this.http.get(`${this.baseUrl}/get.php?id=${id}`);
  }

  addPropietario(propietario: Propietario) {
    return this.http.post(`${this.baseUrl}/post.php`, propietario);
  }

  deletePropietario(propietario: Propietario) {
    return this.http.delete(`${this.baseUrl}/delete.php?id=${propietario.id}`);
  }

  updatePropietario(propietario: Propietario) {
    return this.http.put(`${this.baseUrl}/update.php`, propietario);
  }
}
