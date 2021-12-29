import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: string)
  {
    return this.http.post('https://localhost:44312/api/Auth/Login', credentials,{
      headers: new HttpHeaders({
        "Content-Type" : "application/json"
      })
    });
  }
}
