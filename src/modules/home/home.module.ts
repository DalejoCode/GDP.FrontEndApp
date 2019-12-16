import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home/home.component';
import { SiteUnderConstructionComponent } from './components/site-under-construction/site-under-construction.component';
import { MatSelectModule } from '@angular/material'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, SiteUnderConstructionComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class HomeModule { }
