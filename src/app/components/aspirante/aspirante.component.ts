import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { Aspirante } from './aspirante.model';
import { AspiranteService } from './aspirante.service';

@Component({
  selector: 'app-aspirante',
  templateUrl: './aspirante.component.html',
  styles: [
  ]
})
export class AspiranteComponent implements OnInit {
  paginador: any;
  urlEndPoint : string = 'aspirante';
  aspirante:Aspirante;
  aspirantes:any[]=[];

  constructor(private aspiranteService: AspiranteService, public authService: AuthService, private activateRoute: ActivatedRoute, private router: Router) { }

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
      this.aspiranteService.getAspirante(page).subscribe(response =>{
        this.aspirantes = response.content as Aspirante[]; /*pedir el valor content del json*/
        this.paginador = response;
      })
    })  
  }

}
