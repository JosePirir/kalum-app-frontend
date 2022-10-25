import { Component, OnInit } from '@angular/core';
import { Jornada } from './jornada.model';
import {Router, ActivatedRoute} from '@angular/router';
import { JornadaService } from './jornada.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-jornada',
  templateUrl: './form-jornada.component.html',
  styles: [
  ]
})
export class FormJornadaComponent implements OnInit {

  jornada : Jornada = new Jornada();
  titulo: string;

  constructor(private jornadaService: JornadaService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params =>{
      const jornadaId = params.get('id');
      if(jornadaId){
        this.titulo = "Editar";
        this.jornadaService.getJornada(jornadaId).subscribe((response)=>{
          this.jornada = response;
        })
      }else{
        this.titulo = "Nuevo";
      }
    })
  }

  guardar(): void{
    this.jornadaService.postJornada(this.jornada).subscribe(response => {
      const mensaje = `La jornada ${response.jornadaNombre} se ha creado con exito :D`;
      Swal.fire({
        icon: 'success',
        title: 'Jornada',
        text: mensaje
    }).then(result =>{
      this.router.navigate(['/jornada']);
    });
    },e=>{
      Swal.fire({icon: 'error', title:'Jornada', text:e.message});
    })
  }

  actualizar(): void{
    this.jornadaService.putJornada(this.jornada).subscribe(response =>{
      const mensaje = `La jornada ${this.jornada.jornadaNombre} se ha actualizado con exito`;
      Swal.fire({icon: 'success', title:'Jornada', text: mensaje})
      .then(result => {
        this.router.navigate(['/jornada']);
      });
    },e=>{
      Swal.fire({icon: 'error', title: 'Jornada', text: e});
    })
  }
}