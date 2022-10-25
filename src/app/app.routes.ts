import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {CarreraTecnicaComponent} from './components/carrera-tecnica/carrera-tecnica.component';
import { FormCarreraTecnicaComponent} from './components/carrera-tecnica/form-carrera-tecnica.component';
import { InscripcionComponent } from './components/inscripcion/inscripcion.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { FormJornadaComponent } from './components/jornada/form-jornada.component';
import { JornadaComponent } from './components/jornada/jornada.component';
import { FormUserRegisterComponent } from './components/login/form-user-register.component';

const APP_ROUTES: Routes = [ /*primero esto luego se importa */ 
    { path: 'home', component: HomeComponent},
    { path: 'inscripcion', component: InscripcionComponent},
    { path: 'login', component: LoginComponent},
    { path: 'logout', component: LogoutComponent},
    { path: 'carreraTecnica', component : CarreraTecnicaComponent},
    { path: 'carreraTecnica/page/:page', component : CarreraTecnicaComponent},
    { path: 'carreraTecnica/form', component: FormCarreraTecnicaComponent},
    { path: 'carreraTecnica/form/:id', component: FormCarreraTecnicaComponent},
    { path: 'jornada', component: JornadaComponent},
    { path: 'jornada/form', component: FormJornadaComponent},
    { path: 'jornada/page/:page', component: JornadaComponent},
    { path: 'jornada/form/:id', component: FormJornadaComponent},
    { path: 'login', component: LoginComponent},
    { path: 'usuario/form', component: FormUserRegisterComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}

]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);