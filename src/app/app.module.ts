import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; //logica de formularios con html
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CarreraTecnicaComponent } from './components/carrera-tecnica/carrera-tecnica.component';
import { InscripcionComponent } from './components/inscripcion/inscripcion.component';
import { APP_ROUTING } from './app.routes';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HomeService } from './components/home/home.service';
import { PaginadorComponent } from './components/paginador/paginador.component';
import { FormCarreraTecnicaComponent } from './components/carrera-tecnica/form-carrera-tecnica.component';
import { JornadaComponent } from './components/jornada/jornada.component';
import { FormJornadaComponent } from './components/jornada/form-jornada.component';
import { FormUserRegisterComponent } from './components/login/form-user-register.component';
import { ExamenAdmisionComponent } from './components/examen-admision/examen-admision.component';
import { FormExamenAdmisionComponent } from './components/examen-admision/form-examen-admision.component';
import { ResultadoExamenAdmisionComponent } from './components/resultado-examen-admision/resultado-examen-admision.component';
import { FormResultadoExamenAdmisionComponent } from './components/resultado-examen-admision/form-resultado-examen-admision.component';
import { TokenInterceptor } from './components/interceptors/token.interceptor';
import { AuthGuard } from './components/login/guards/auth.guard';
import { AspiranteComponent } from './components/aspirante/aspirante.component';
import { FormAspiranteComponent } from './components/aspirante/aspirante-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CarreraTecnicaComponent,
    InscripcionComponent,
    LoginComponent,
    LogoutComponent,
    PaginadorComponent,
    FormCarreraTecnicaComponent,
    JornadaComponent,
    FormJornadaComponent,
    FormUserRegisterComponent,
    ExamenAdmisionComponent,
    FormExamenAdmisionComponent,
    ResultadoExamenAdmisionComponent,
    FormResultadoExamenAdmisionComponent,
    AspiranteComponent,
    FormAspiranteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING,
    FormsModule //agregado para ngForm
  ],
  providers: [HomeService,{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi:true}],/*servicios*/
  bootstrap: [AppComponent]
})

export class AppModule { }