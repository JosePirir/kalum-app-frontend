import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ResultadoExamenAdmision } from './resultado-examen-admision.model';
import { ResultadoExamenAdmisionService } from './resultado-examen-admision.service';

@Component({
  selector: 'app-form-resultado-examen-admision',
  templateUrl: './form-resultado-examen-admision.component.html',
  styles: [
  ]
})
export class FormResultadoExamenAdmisionComponent implements OnInit {

  resultadoExamenAdmision: ResultadoExamenAdmision = new ResultadoExamenAdmision();

  constructor(private resultadoExamenAdmisionService: ResultadoExamenAdmisionService, private router: Router) { }

  ngOnInit(): void {
  }

  guardar(): void{
    this.resultadoExamenAdmisionService.postResultadoExamenAdmision(this.resultadoExamenAdmision).subscribe(response => {
      const mensaje = `El resulatdo de admision con el numero de expediente ${response.noExpediente} se ha guardado con exito`;
      Swal.fire({icon: 'success', title:'Resultado Examen Admision', text: mensaje})
      .then(result =>{
        this.router.navigate(['/resultadoExamenAdmision']);
      });
    },e=>{
      Swal.fire({icon: 'error', title:'Resultado Examen Admision', text:e});
    });
  }

}
