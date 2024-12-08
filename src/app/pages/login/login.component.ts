import { Component } from '@angular/core';
import { HomeComponent } from '../../components/home/home.component';
import { LoginLayoutComponent } from '../../components/login-layout/login-layout.component';

@Component({
  selector: 'app-login',
  imports: [
    HomeComponent,
    LoginLayoutComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
