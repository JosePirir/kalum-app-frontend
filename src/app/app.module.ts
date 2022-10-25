import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
    FormUserRegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING,
    FormsModule //agregado para ngForm
  ],
  providers: [HomeService],/*servicios*/
  bootstrap: [AppComponent]
})

export class AppModule { }