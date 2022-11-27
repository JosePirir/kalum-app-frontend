import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from './auth.service';
import { Usuario } from './usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.usuario.email = 'jpirir@kinal.edu.gt';
    this.usuario.password = 'AspNet.2022';
  }

  login(): void{
    if((this.usuario.email == null || this.usuario.password == null) || (this.usuario.email.length === 0 || this.usuario.password.length === 0)){
      Swal.fire({
        icon: 'error',
        title: 'Login ERROR',
        text: 'Username o password son incorrectos',
        footer: 'Kalum v1.0.0'
      })
      return;
    }

  this.authService.login(this.usuario).subscribe(response=>{
    const payload = this.authService.getToken(response.token);
    this.authService.saveToken(response.token);
    this.authService.saveUser(payload);
    Swal.fire({
      icon: 'success',
      title: 'Login success',
      text: `Bienvenido ${payload.email} al sistema :D`,
      footer: 'kalum v1.0.0'
    }).then(result =>{
      if(result.isConfirmed){
        this.router.navigate(['/home']);
      }
    });
    console.log(response);
  },error =>{
    if(error.status == 400){
      Swal.fire({
        icon: 'error', title: 'Login', text:'Username o password incorrectos, revise sus credenciales',
        footer: 'Kalum v1.0.0'
      })
    }else{
      Swal.fire({
        icon: 'error', title: 'Service Failed', text: 'Existe un problema con los servicios kalum',
        footer: 'Kalum v1.0.0'
      });
    }
  });
  }

  isEmptyObject(obj: Object){
    return (obj && (Object.keys(obj).length == 0));
  }

}
