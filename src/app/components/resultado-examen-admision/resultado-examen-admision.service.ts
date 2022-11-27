import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResultadoExamenAdmision } from './resultado-examen-admision.model';

@Injectable({
  providedIn: 'root'
})
export class ResultadoExamenAdmisionService {
  endPoint = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getResultadosExamenAdmision(page: number): Observable<any>{
    return this.httpClient.get<any[]>(`${this.endPoint}/resultadoExamenAdmision/page/${page}`);
  }

  postResultadoExamenAdmision(resultadoExamenAdmision: ResultadoExamenAdmision):Observable<ResultadoExamenAdmision>{
    return this.httpClient.post<ResultadoExamenAdmision>(`${this.endPoint}/resultadoExamenAdmision`,resultadoExamenAdmision);
  }

  putResultadoExamenAdmision(resultadoExamenAdmision: ResultadoExamenAdmision): Observable<any>{
    return this.httpClient.put<any>(`${this.endPoint}/resultadoExamenAdmision/${resultadoExamenAdmision.noExpediente}`,resultadoExamenAdmision).pipe(
      catchError(e => {return throwError(()=>{
        Error(e);
      })})
    );
  }

  getResultadoExamenAdmision(resultadoId:string):Observable<ResultadoExamenAdmision>{
    return this.httpClient.get<ResultadoExamenAdmision>(`${this.endPoint}/resultadoExamenAdmision/${resultadoId}`).pipe(
      catchError(e => {return throwError(()=>{
        Error(e);
      })})
    );
  }

  deleteResultadoExamenAdmision(resultadoId:string):Observable<ResultadoExamenAdmision>{
    return this.httpClient.delete<ResultadoExamenAdmision>(`${this.endPoint}/resultadoExamenAdmision/${resultadoId}`).pipe(
      catchError(e => {return throwError(()=>{
        Error(e);
      })})
    );
  }
}
