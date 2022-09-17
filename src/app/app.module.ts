import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TerraplanagemComponent } from './servicos/terraplanagem/terraplanagem.component';
import { DrenagemComponent } from './servicos/drenagem/drenagem.component';
import { ConsultoriaComponent } from './servicos/consultoria/consultoria.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TerraplanagemComponent,
    DrenagemComponent,
    ConsultoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
