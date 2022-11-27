import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario.model';
import swal from 'sweetalert2';
import { UsuarioService } from '../usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-user-register',
  templateUrl: './form-user-register.component.html',
  styles: [
  ]
})
export class FormUserRegisterComponent implements OnInit {
  usuario: Usuario = new Usuario();
  constructor(private usuarioService:UsuarioService, private router:Router) { }

  ngOnInit(): void {
  }

  create(): void{
    this.usuario.roles.push('ROLE_USER');
    this.usuarioService.create(this.usuario).subscribe(response =>{
      let mensaje = `El usuario ${response.username} ha sido creado con exito`;
      swal.fire('Registro', mensaje, 'success').then(respuesta =>{
        if (respuesta.isConfirmed){
          this.router.navigate(['/carreraTecnica']);
        }
      });
      
    })
  }
}