import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable,throwError } from 'rxjs'; /*programación funcional*/ 
import { CarreraTecnica } from '../carrera-tecnica/carrera-tecnica.model';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarreraTecnicaService {
  endPoint = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getCarrerasTecnicas(page: number) : Observable<any>/*devuelve observable de tipo any */
  {
    return this.httpClient.get<any[]>(`${this.endPoint}/CarrerasTecnicas/page/${page}`);
  }

  postCarreraTecnica(carreraTecnica:CarreraTecnica) : Observable<CarreraTecnica>{
    return this.httpClient.post<CarreraTecnica>(`${this.endPoint}/CarrerasTecnicas`, carreraTecnica); /*al hacer el post devuelva un elementro carreraTecnica*/
  }

  putCarreraTecnica(carreraTecnica:CarreraTecnica): Observable<any>{
    return this.httpClient.put<any>(`${this.endPoint}/CarrerasTecnicas/${carreraTecnica.carreraId}`,carreraTecnica).pipe(
      catchError(e =>{return throwError(()=>{
      Error(e);
        })
      })
    );
  }

  getCarreraTecnica(carreraId: string): Observable<CarreraTecnica>{
    return this.httpClient.get<CarreraTecnica>(`${this.endPoint}/CarrerasTecnicas/${carreraId}`).pipe(catchError(
      e=>{return throwError(()=>{
        Error(e);
      })}
    ))
  }

  deleteCarreraTecnica(carreraId: string):Observable<CarreraTecnica>{
    return this.httpClient.delete<CarreraTecnica>(`${this.endPoint}/CarrerasTecnicas/${carreraId}`).pipe(catchError(e=>{return throwError(()=>{
      Error(e);
      })}
    ));
  }
}
/*variable de entorno*/ 