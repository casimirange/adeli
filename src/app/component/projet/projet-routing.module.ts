import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexProjetComponent} from "./index-projet/index-projet.component";
import {LprojetComponent} from "./lprojet/lprojet.component";

const routes: Routes = [
  { path:'', component: LprojetComponent, children: [
      { path: '', redirectTo: 'index', pathMatch: 'full'},
      { path: 'index', component: IndexProjetComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetRoutingModule { }
