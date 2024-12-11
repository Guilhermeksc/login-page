import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  login(userData: { email: string; password: string; token?: string }): Observable<LoginResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      ...(userData.token ? { 'Authorization': `Bearer ${userData.token}` } : {})
    });

    console.log("Enviando dados para o servidor com headers:", { userData, headers });

    return this.httpClient.post<LoginResponse>(
      `${this.apiUrl}/login`,
      { email: userData.email, password: userData.password },
      { headers }
    ).pipe(
      tap({
        next: (value) => {
          console.log("Resposta recebida do servidor:", value);
          sessionStorage.setItem("auth-token", value.token);
          sessionStorage.setItem("username", value.name);
        },
        error: (error) => {
          console.error("Erro recebido do servidor:", error);
        }
      })
    );
  }

  getAuthHeaders(): HttpHeaders {
    const token = sessionStorage.getItem("auth-token");
    return new HttpHeaders({ 'Authorization': `Bearer ${token}` });
  }

  signup(name: string, email: string, password: string): Observable<LoginResponse> {
    console.log("Enviando dados de registro para o servidor:", { name, email, password });
    return this.httpClient.post<LoginResponse>(this.apiUrl + "/register", { name, email, password }).pipe(
      tap({
        next: (value) => {
          console.log("Resposta de registro recebida do servidor:", value);
          sessionStorage.setItem("auth-token", value.token);
          sessionStorage.setItem("username", value.name);
        },
        error: (error) => {
          console.error("Erro de registro recebido do servidor:", error);
        }
      })
    );
  }
}