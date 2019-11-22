import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SiteUnderConstructionComponent } from './components/site-under-construction/site-under-construction.component';
import { CanActivateMaintenance } from 'core/providers/can-activate-maintenance';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [CanActivateMaintenance] },
  { path: 'site-under-construction', component: SiteUnderConstructionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
