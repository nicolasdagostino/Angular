import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {
  public autor: string
  public mensaje: string

  public frase: any = {
    autor: 'Homer Simpson',
    mensaje: 'Tendrá todo el dinero del mundo, pero hay algo que jamás podrá comprar: un dinosaurio'

  }
  public mostrar: boolean
  public colores: string[]

  //propiedades de directivas de atributo
  public tam: number
  public alerta: string

  //propiedad procesos asincronos
  public loading: boolean
  public textoGuardar: string
  public tipo: string

  constructor() {
    this.autor = "Homer Simpson"
    this.mensaje = "Tendrá todo el dinero del mundo, pero hay algo que jamás podrá comprar: un dinosaurio"
    this.mostrar = true
    this.colores = ['rojo', 'azul', 'verde', 'amarillo']
    this.tam = 10
    this.alerta = 'alert-success'
    this.loading = true
    this.textoGuardar = "Guardar cambios"
    this.tipo = 'fdsfsdfsf'
  }
  ngOnInit(): void {

  }
  public mostrarOcultar() {
    this.mostrar = !this.mostrar
  }

  public incrementarFuente() {
    if (this.tam < 40) this.tam++
  }
  public decrementarFuente() {
    if (this.tam > 5) this.tam--
  }
  public guardarCambios() {
    this.loading = false

    //simular una peticion al servidor con un tiempo de respuesta de 3 segundos.
    setTimeout(() => {
      this.loading = true
    }, 3000)
  }
}
