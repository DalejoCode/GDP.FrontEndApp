import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SiteUnderConstructionComponent } from './components/site-under-construction/site-under-construction.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'site-under-construction', component: SiteUnderConstructionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
