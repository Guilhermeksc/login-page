import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = sessionStorage.getItem('auth-token');
    if (token) {
      return true; // Permite o acesso
    } else {
      this.router.navigate(['/login']); // Redireciona para login
      return false;
    }
  }
}