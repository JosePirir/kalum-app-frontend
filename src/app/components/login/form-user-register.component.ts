import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario.model';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form-user-register',
  templateUrl: './form-user-register.component.html',
  styles: [
  ]
})
export class FormUserRegisterComponent implements OnInit {
  usuario: Usuario = new Usuario();
  constructor() { }

  ngOnInit(): void {
  }

  create(): void{
    swal.fire('Registro', 'Registro creado con exito', 'success');
  }
}
