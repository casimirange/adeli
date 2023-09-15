import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetRoutingModule } from './projet-routing.module';
import {LprojetComponent} from "./lprojet/lprojet.component";
import {IndexProjetComponent} from "./index-projet/index-projet.component";
import {SharedModule} from "../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    LprojetComponent,
    IndexProjetComponent,
  ],
  imports: [
    CommonModule,
    ProjetRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class ProjetModule { }
