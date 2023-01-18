import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OfuscadorPipe } from './pipes/ofuscador.pipe';

@NgModule({
  declarations: [
    AppComponent,
    OfuscadorPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
