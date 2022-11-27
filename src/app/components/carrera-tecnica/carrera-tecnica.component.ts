import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarreraTecnica } from './carrera-tecnica.model';
import { CarreraTecnicaService } from './carrera-tecnica.service';
import Swal from "sweetalert2";
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-carrera-tecnica',
  templateUrl: './carrera-tecnica.component.html'
})
export class CarreraTecnicaComponent implements OnInit {

  carreraTecnica : CarreraTecnica;
  urlEndPoint : string = 'carreraTecnica';
  carrerasTecnicas : any[] =[];
  paginador: any;

  constructor(private carreraTecnicaService: CarreraTecnicaService, public authService: AuthService, private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(params => {/*paramMap detecta si se envian unos datos o no*//*de string a entero signo +*/
      let parametro = params.get('page');
      let page: number;
      if(!parametro)
      {
        page = 0;
      }
      else
      {
        page = + parametro;
      }
      this.carreraTecnicaService.getCarrerasTecnicas(page).subscribe(response =>{
        this.carrerasTecnicas = response.content as CarreraTecnica[]; /*pedir el valor content del json*/
        this.paginador = response;
        console.log(this.carrerasTecnicas)
      })
    })  
  }

  eliminar(carreraTecnica: CarreraTecnica): void{
    Swal.fire({
      title: 'Carreras Técnicas',
      text: `Está seguro de eliminar la carrera técnica con el id ${carreraTecnica.nombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
      reverseButtons: true
    }).then(resultado =>{
      if(resultado.isConfirmed){
        this.carreraTecnicaService.deleteCarreraTecnica(carreraTecnica.carreraId).subscribe(()=>{
          this.carrerasTecnicas = this.carrerasTecnicas.filter(elemento => elemento !== carreraTecnica);
          Swal.fire('Carreras Técnicas','Registro Eliminado','success');
        })
      }
    })
  }

  asignar(carreraTecnica: CarreraTecnica):void{
    Swal.fire({
      title: 'Asignar carrera Tecnica',
      text: `Esta seguro de asignarse una carreraTecnica ${carreraTecnica.nombre}?`,
      icon: 'warning',
      showCancelButton:true,
      confirmButtonText:'Si',
      cancelButtonText:'No',
      reverseButtons:true
    }).then(resultado=>{
      if(resultado.isConfirmed){
        Swal.fire({
          title: 'Registro de usuario',
          text: `Tienes una cuenta de usuario con nosotros?`,
          icon: 'question',
          showCancelButton:true,
          confirmButtonText:'Si',
          cancelButtonText:'No',
          reverseButtons:true
        }).then(response =>{
          if(response.isConfirmed){
            this.router.navigate(['/login']);
          }
          else{
            this.router.navigate(['/usuario/form']);
          }
        });
      }
    })
  }
}