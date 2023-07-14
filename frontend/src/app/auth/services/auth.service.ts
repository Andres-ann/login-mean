import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginData } from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = 'http://localhost:8000/api/auth';

  constructor(private httpClient: HttpClient) {}

  login(loginData: LoginData): Observable<any> {
    return this.httpClient.post<any>(`${this.API_URL}/signin`, loginData);
  }
}
