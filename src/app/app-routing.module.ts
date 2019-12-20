import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateAuth } from '@providers/can-activate-auth';
import { CanActivateLoginModule } from '@providers/can-activate-login-module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@modules/home/home.module').then(module => module.HomeModule),
    canActivate: [CanActivateAuth]
  },
  {
    path: 'feed',
    loadChildren: () => import("@modules/login/login.module").then(module => module.LoginModule),
    canActivate: [CanActivateLoginModule]
  },
  {
    path: 'booking',
    loadChildren: () => import("@modules/booking/booking.module").then(module => module.BookingModule),
    canActivate: [CanActivateAuth]
  },
  {
    path: '**',
    loadChildren: () => import('@modules/not-found/not-found.module').then(module => module.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
