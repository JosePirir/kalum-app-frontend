import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ExamenAdmision } from './examen-admision.model';
import { ExamenAdmisionService } from './examen-admision.service';

@Component({
  selector: 'app-form-examen-admision',
  templateUrl: './form-examen-admision.component.html',
  styles: [
  ]
})
export class FormExamenAdmisionComponent implements OnInit {

  examenAdmision: ExamenAdmision = new ExamenAdmision();
  titulo: string;

  constructor(private examenAdmisionService: ExamenAdmisionService, private router:Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params =>{
      const examenId = params.get('id');
      if(examenId){
        this.titulo = "Editar";
        this.examenAdmisionService.getExamenAdmision(examenId).subscribe((response) => {
          this.examenAdmision = response;
        })
      }else{
        this.titulo = "Nuevo";
      }
    });
  }

  guardar(): void{
    this.examenAdmisionService.postExamenAdmision(this.examenAdmision).subscribe(response =>{
      const mensaje = `El examen admision con fecha ${this.examenAdmision.fechaExamen} se ha guardado con exito.`
      Swal.fire({icon:'success',title:'Examen Admision', text: mensaje})
      .then(result =>{
        this.router.navigate(['/examenAdmision']);
      })
    },e=>{
      Swal.fire({icon: 'error', title:'Examen Admision', text:e.message});
    });
  }

  actualizar(): void{
    this.examenAdmisionService.putExamenAdmision(this.examenAdmision).subscribe(response =>{
      const mensaje = `El examen admision con fecha ${this.examenAdmision.fechaExamen} se ha guardado con exito.`
      Swal.fire({icon:'success',title:'Examen Admision', text: mensaje})
      .then(result =>{
        this.router.navigate(['/examenAdmision']);
      })
    },e=>{
      Swal.fire({icon: 'error', title:'Examen Admision', text:e});
    });
  }
}