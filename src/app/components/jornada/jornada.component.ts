import { Component, OnInit } from '@angular/core';
import { Jornada } from './jornada.model';
import {Router, ActivatedRoute} from '@angular/router';
import { JornadaService } from './jornada.service';
import Swal from 'sweetalert2';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-jornada',
  templateUrl: './jornada.component.html',
  styles: [
  ]
})
export class JornadaComponent implements OnInit {

  urlEndPoint : string = 'jornada';
  jornada : Jornada;
  jornadas: any[] = [];
  paginador: any;

  constructor(private jornadaService : JornadaService, public authService: AuthService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let parametro = params.get('page');
      let page: number;
      if(!parametro){
        page = 0;
      }
      else{
        page = + parametro;
      }
      this.jornadaService.getJornadas(page).subscribe (response =>{
        this.jornadas = response.content as Jornada[];
        this.paginador = response;
      })
    })
  }

  eliminar(jornada: Jornada): void{
    Swal.fire({
      title: 'Jornadas',
      text: `Está seguro de eliminar la jornada con el id ${jornada.jornadaNombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
      reverseButtons: true
    }).then(resultado =>{
      if(resultado.isConfirmed){
        this.jornadaService.deleteJornada(jornada.jornadaId).subscribe(()=>{
          this.jornadas = this.jornadas.filter(elemento => elemento !== jornada);
          Swal.fire('Jornadas', 'Registro eliminado', 'success');
        })
      }
    })
  }
}