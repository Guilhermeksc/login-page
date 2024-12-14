import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Configuração de rotas
    provideHttpClient(), // Cliente HTTP
    provideAnimations(), // Habilitação de animações
    provideToastr(), provideAnimationsAsync() // Configuração do ngx-toastr
  ]
};
