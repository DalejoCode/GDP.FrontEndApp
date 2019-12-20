import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home/home.component';
import { SiteUnderConstructionComponent } from './components/site-under-construction/site-under-construction.component';
import { MzButtonModule, MzInputModule } from "ngx-materialize";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialCommonsModule } from '@modules/material-commons/material-commons.module';

@NgModule({
  declarations: [HomeComponent, SiteUnderConstructionComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialCommonsModule,
    FormsModule,
    ReactiveFormsModule,
    MzButtonModule,
    MzInputModule
  ],
  providers: []
})
export class HomeModule { }
