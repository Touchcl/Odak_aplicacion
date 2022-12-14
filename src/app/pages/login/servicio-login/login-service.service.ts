import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  [x: string]: any;
  //----- Ruta archivo conexion -----
  // url = "http://192.168.1.244/ejercicio_php/"; 

  headers: any;
  private url: string = environment.urlbd

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }

  btlogin(data: any): Observable<any> {
    let params = JSON.stringify(data);
    let Headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.url}login.php`, params, {
      headers: Headers,
    });
  }
}