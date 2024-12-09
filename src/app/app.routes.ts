import { SignUpComponent } from './pages/signup/signup.component';
import { UserComponent } from './pages/user/user.component';
import { AuthGuard } from './services/auth-guard.service';

import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Home na raiz
  { path: 'login', component: LoginComponent }, // Login na rota /login
  { path: '**', redirectTo: '' } // Redireciona rotas não encontradas para a Home
];