import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GLOBAL_ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
import { UsuarioEditarComponent } from './components/usuario/usuario-editar.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsuarioComponent,
    UsuarioNuevoComponent,
    UsuarioEditarComponent,
    UsuarioDetalleComponent
  ],
  imports: [
    BrowserModule,
    GLOBAL_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
