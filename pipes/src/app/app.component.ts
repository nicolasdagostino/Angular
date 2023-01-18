import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public nombre = 'Arch Stanton'
  miArray = [1,2,3,4,5,6,7,8,9,10]
  public PI = Math.PI
  public importe = 1234.345678
  public porcentaje = 0.127
  public sueldo = 1456.78
  public info = {
    nombre: 'Juan',
    clave: 'jkg',
    edad: 26,
    direccion: {
      calle: 'principal',
      numero: 2
    }
  }
  public fecha = '2023/01/16'
  public password = 'admin2023'
  public visible = true
}
