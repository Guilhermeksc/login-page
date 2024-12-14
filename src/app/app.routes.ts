import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { SignUpComponent } from './pages/signup/signup.component';
import { AuthGuard } from './services/auth-guard.service';

import { MainComponent } from './main/main/main.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Página inicial
  { path: 'login', component: LoginComponent }, // Página de login
  { path: 'home', component: MainComponent }, // Protegido por AuthGuard
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] }, // Protegido por AuthGuard
  { path: 'signup', component: SignUpComponent }, // Cadastro
  { path: '**', redirectTo: '' } // Redireciona rotas inválidas
];
