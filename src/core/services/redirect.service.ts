import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class RedirectService {
  constructor(private router: Router) {  }

  public redirectToHomePage(): void {
    this.router.navigate(['/']);
  }

  public redirectToLoginPage(): void {
    this.router.navigate(['/feed/login']);
  }

  public redirectToSearchPage(): void {
    this.router.navigate(['/booking/search']);
  }

}
