import { Component, OnInit } from '@angular/core';
import { CarreraTecnica } from '../carrera-tecnica/carrera-tecnica.model';
import { CarreraTecnicaService} from '../carrera-tecnica/carrera-tecnica.service';
import { ExamenAdmisionService } from '../examen-admision/examen-admision.service';
import { JornadaService } from '../jornada/jornada.service';
import { Jornada } from '../jornada/jornada.model';
import { ExamenAdmision } from '../examen-admision/examen-admision.model';
import { AuthService } from '../login/auth.service';
import { Usuario } from '../login/usuario.model';
import { Aspirante } from './aspirante.model';
import { AspiranteService } from './aspirante.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-aspirante-form',
  templateUrl: './aspirante-form.component.html',
  styles: [
  ]
})

export class FormAspiranteComponent implements OnInit {
  aspirante: Aspirante = new Aspirante();
  carrerasTecnicas: any[] = [];
  jornadas: any[] = [];
  examenesAdmision: any[] = [];
  usuario: Usuario;
  router: any;
  
  constructor(private aspiranteService: AspiranteService,private CarreraTecnicaService: CarreraTecnicaService, private jornadaService: JornadaService, 
    private examenAdmisionService: ExamenAdmisionService, private authService: AuthService) { 
      this.usuario = this.authService.usuario;
      console.log(this.usuario.email);
    }

  
  ngOnInit(): void {
    this.CarreraTecnicaService.getListaCarrerasTecnicas().subscribe(response => {
      this.carrerasTecnicas = response as CarreraTecnica[];      
    });

    this.jornadaService.getListaJornadas().subscribe(response => {
      this.jornadas = response as Jornada[];
    });

    this.examenAdmisionService.getListaExamenesAdmision().subscribe(response => {
      this.examenesAdmision = response as ExamenAdmision[];
    })
    
  }

  guardar():void{
    console.log(this.aspirante);
    this.aspiranteService.postAspirante(this.aspirante).subscribe(response=>{
      const mensaje = `El aspirante ha sido creado con exito`;
      Swal.fire({icon: 'success',
       title: 'Carreras técncias',
       text: mensaje}).then(result => {
       });
    },
    e => {
      Swal.fire({icon: 'error', title: 'Carreras técnicas', text: e});
    })
  }
}
