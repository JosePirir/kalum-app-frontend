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
import { ExamenAdmisionComponent } from './components/examen-admision/examen-admision.component';
import { FormExamenAdmisionComponent } from './components/examen-admision/form-examen-admision.component';
import { ResultadoExamenAdmisionComponent } from './components/resultado-examen-admision/resultado-examen-admision.component';
import { FormResultadoExamenAdmisionComponent } from './components/resultado-examen-admision/form-resultado-examen-admision.component';
import { AuthGuard } from './components/login/guards/auth.guard';
import { RoleGuard } from './components/login/guards/role.guard';

const APP_ROUTES: Routes = [ /*primero esto luego se importa */ 
    { path: 'home', component: HomeComponent},
    { path: 'inscripcion', component: InscripcionComponent, canActivate: [AuthGuard],data:{role: 'ROLE_USER'}},
    { path: 'login', component: LoginComponent},
    { path: 'logout', component: LogoutComponent},
    { path: 'carreraTecnica', component : CarreraTecnicaComponent},
    { path: 'carreraTecnica/page/:page', component : CarreraTecnicaComponent},
    { path: 'carreraTecnica/form', component: FormCarreraTecnicaComponent},
    { path: 'carreraTecnica/form/:id', component: FormCarreraTecnicaComponent},
    { path: 'jornada', component: JornadaComponent},
    { path: 'jornada/page/:page', component: JornadaComponent},
    { path: 'jornada/form', component: FormJornadaComponent},
    { path: 'jornada/form/:id', component: FormJornadaComponent},
    { path: 'examenAdmision', component: ExamenAdmisionComponent, canActivate: [AuthGuard, RoleGuard], data:{role: 'ROLE_ADMIN'}},
    { path: 'examenAdmision/page/:page', component: ExamenAdmisionComponent},
    { path: 'examenAdmision/form', component: FormExamenAdmisionComponent},
    { path: 'examenAdmision/form/:id', component: FormExamenAdmisionComponent},
    { path: 'resultadoExamenAdmision', component: ResultadoExamenAdmisionComponent},
    { path: 'resultadoExamenAdmision/page/:page', component: ResultadoExamenAdmisionComponent},
    { path: 'resultadoExamenAdmision/form', component: FormResultadoExamenAdmisionComponent},
    { path: 'resultadoExamenAdmision/form/:id', component: FormResultadoExamenAdmisionComponent},
    { path: 'login', component: LoginComponent},
    { path: 'usuario/form', component: FormUserRegisterComponent},
    { path: 'aspirante/form', component: FormUserRegisterComponent, canActivate:[AuthGuard,RoleGuard], data:{role:'ROLE_USER'}},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}

]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);