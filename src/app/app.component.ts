import { Component } from '@angular/core';

//Decorador Angular
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //atributos de la clase
  public nombre:string;
  public apellidos:string;

  //constructor
  constructor(){
  this.nombre = 'Arch'
  this.apellidos = 'Stanton'
}
}
