import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aspirante } from './aspirante.model';

@Injectable({
  providedIn: 'root'
})
export class AspiranteService {

  endPoint = environment.baseUrl;

  constructor(private httpClient:HttpClient) { }

  postAspirante(aspirante:Aspirante):Observable<Aspirante>{
    return this.httpClient.post<Aspirante>(`${this.endPoint}/Aspirante`,aspirante);
  }

  getAspirante(page:number):Observable<any>{
    return this.httpClient.get(`${this.endPoint}/Aspirante/page/${page}`);
  }
}
