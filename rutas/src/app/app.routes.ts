/*
import { Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { UsuarioDetalleComponent } from "./components/usuario/usuario-detalle.component";
import { UsuarioEditarComponent } from "./components/usuario/usuario-editar.component";
import { UsuarioNuevoComponent } from "./components/usuario/usuario-nuevo.component";
import { UsuarioComponent } from "./components/usuario/usuario.component";

const rutas: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'usuario', component: UsuarioComponent, children:[
    {path:'nuevo', component:UsuarioNuevoComponent},
    {path:'editar', component:UsuarioEditarComponent},
    {path:'detalle',component:UsuarioDetalleComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'nuevo' }
  ] },
  { path: '**', pathMatch: 'full', redirectTo: 'home' } //cualquier otra ruta no contemplada redirige a home
];
export const GLOBAL_ROUTES = RouterModule.forRoot(rutas);
*/

import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {UsuarioComponent} from './components/usuario/usuario.component';
import {USUARIO_ROUTES} from './components/usuario/usuario.routes';
const rutas: Routes = [
  { path: 'home', component: HomeComponent },
  {    path: 'usuario',    component: UsuarioComponent,    children: USUARIO_ROUTES  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
export const GLOBAL_ROUTES = RouterModule.forRoot(rutas);
