import { ContatoComponent } from './contato/contato.component';
import { AreaAtuacaoComponent } from './area-atuacao/area-atuacao.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home'},
  {path: 'home' , component: HomeComponent},
  {path: 'quem-somos' , component: QuemSomosComponent},
  {path: 'area-atuacao' , component: AreaAtuacaoComponent},
  {path: 'contato' , component: ContatoComponent},
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
