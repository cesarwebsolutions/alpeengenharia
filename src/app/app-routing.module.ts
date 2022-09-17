import { ConsultoriaComponent } from './servicos/consultoria/consultoria.component';
import { DrenagemComponent } from './servicos/drenagem/drenagem.component';
import { TerraplanagemComponent } from './servicos/terraplanagem/terraplanagem.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  {path: 'servicos' , children:[
    {path: 'terraplanagem', component: TerraplanagemComponent},
    {path: 'drenagem', component: DrenagemComponent},
    {path: 'consultoria', component: ConsultoriaComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
