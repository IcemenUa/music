import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAlbums(genre: string): Observable<any> {

    return this.http.get(`${environment.apiUrl}?method=tag.gettopalbums&tag=${genre}&api_key=${environment.apiKey}&format=json`)



  }

}
