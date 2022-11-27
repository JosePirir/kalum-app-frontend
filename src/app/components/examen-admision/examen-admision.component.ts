import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { ExamenAdmision } from './examen-admision.model';
import { ExamenAdmisionService } from './examen-admision.service';

@Component({
  selector: 'app-examen-admision',
  templateUrl: './examen-admision.component.html',
  styles: [
  ]
})
export class ExamenAdmisionComponent implements OnInit {

  urlEndPoint : string = 'examenAdmision';
  examenAdmision : ExamenAdmision;
  examenesAdmision : any[] = [];
  paginador: any;

  constructor(private examenAdmisionService: ExamenAdmisionService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let parametro = params.get('page');
      let page:number;
      if(!parametro){
        page = 0;
      }
      else{
        page =+ parametro;
      }
      this.examenAdmisionService.getExamenesAdmision(page).subscribe(response =>{
        this.examenesAdmision = response.content as ExamenAdmision[];
        this.paginador = response;
      })
    })
  }

  eliminar(examenAdmision: ExamenAdmision): void{
    Swal.fire({
      title: 'ExamenAdmision',
      text: `Está seguro de eliminar el examen de admisión con la fecha ${examenAdmision.fechaExamen}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
      reverseButtons: true
    }).then(resultado =>{
      if(resultado.isConfirmed){
        this.examenAdmisionService.deleteExamenAdmision(examenAdmision.examenId).subscribe(()=>{
          this.examenesAdmision = this.examenesAdmision.filter(elemento => elemento !== examenAdmision);
          Swal.fire('Examen Admision','Registro eliminado', 'success');
        })
      }
    })
  }

}
