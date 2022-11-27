import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { ResultadoExamenAdmision } from './resultado-examen-admision.model';
import { ResultadoExamenAdmisionService } from './resultado-examen-admision.service';

@Component({
  selector: 'app-resultado-examen-admision',
  templateUrl: './resultado-examen-admision.component.html',
  styles: [
  ]
})
export class ResultadoExamenAdmisionComponent implements OnInit {

  urlEndPoint: string = 'resultadoExamenAdmision';
  resultadoExamenAdmision: ResultadoExamenAdmision;
  resultadosExamenAdmision: any[] = [];
  paginador: any;

  constructor(private resultadoExamenAdmisionService: ResultadoExamenAdmisionService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let parametro = params.get('page');
      let page:number;
      if(!parametro){
        page = 0;
      }else{
        page =+ parametro;
      }
      this.resultadoExamenAdmisionService.getResultadosExamenAdmision(page).subscribe(response =>{
        this.resultadosExamenAdmision = response.content as ResultadoExamenAdmision[];
        this.paginador = response;
      })
    })
  }

}
