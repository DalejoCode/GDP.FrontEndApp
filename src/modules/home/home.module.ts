import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home/home.component';
import { SiteUnderConstructionComponent } from './components/site-under-construction/site-under-construction.component';
import { CanActivateMaintenance } from '@providers/can-activate-maintenance';
import { MatSelectModule } from '@angular/material'
import { MzButtonModule, MzInputModule } from "ngx-materialize";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, SiteUnderConstructionComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MzButtonModule,
    MzInputModule
  ],
  providers: [
    CanActivateMaintenance
  ]
})
export class HomeModule { }
