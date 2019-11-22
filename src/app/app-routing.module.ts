import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('@modules/home/home.module').then(module => module.HomeModule) },
  { path: 'Login', loadChildren: () => import("@modules/login/login.module").then(module => module.LoginModule) },
  { path: '**', loadChildren: () => import('@modules/not-found/not-found.module').then(module => module.NotFoundModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
