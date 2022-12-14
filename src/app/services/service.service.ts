import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  BASE_URL_INVENTARIO = environment.BASE_URL_INVENTARIO;

  constructor(
    private http: HttpClient
  ) { }

  public getData<T>(pUrl: string, pNombreServicio: string | null, pParametro: string | null = null, pJSON: boolean = false): Observable<T> {
    if (pNombreServicio == null) {
      if (pParametro === null) {
        return this.http.get<T>(`${pUrl}`, this.generateHeaders(pJSON));
      } else {
        return this.http.get<T>(`${pUrl}/${pParametro}`, this.generateHeaders(pJSON));
      }
    } else {
      if (pParametro === null) {
        return this.http.get<T>(`${pUrl}/${pNombreServicio}`, this.generateHeaders(pJSON));
      } else {
        return this.http.get<T>(`${pUrl}/${pNombreServicio}/${pParametro}`, this.generateHeaders(pJSON));
      }
    }
  }

  public generateHeaders(json: boolean = false): object {
    let headers: HttpHeaders;
    if (json) {
      headers = new HttpHeaders({
        'Accept': '*/*',
        'Content-Type': 'application/json'
      });
    } else {
      headers = new HttpHeaders({
        'Accept': '*/*'
      });
    }
    //console.log('header a enviar:', JSON.stringify(headers));
    let httpOptions: object = { "headers": headers };
    return httpOptions;
  }


  public postData(pUrl: string, pNombreServicio: string | null, pBody: Object, pJSON: boolean = true): Observable<any> {
    if (pNombreServicio === null) {
        return this.http.post(pUrl, pBody, this.generateHeaders(pJSON));
    } else {
        return this.http.post(`${pUrl}/${pNombreServicio}`, pBody, this.generateHeaders(pJSON));
    }
}

public putData<T>(pUrl: string, pParametro: string, pBody: T): Observable<any> {
  let body = null;
  if (pBody)
      body = JSON.stringify(pBody);

  if (pParametro === null) {
      return this.http.put(`${pUrl}`, body, this.generateHeaders(true));
  }
  else {
      return this.http.put(`${pUrl}/${pParametro}`, body, this.generateHeaders(true));
  }
}
}
