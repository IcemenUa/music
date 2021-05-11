import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAlbums(genre): Observable<any> {
console.log(genre);

    // return this.http.get(`${environment.apiUrl}?method=tag.gettopalbums&tag=${genre}&api_key=${environment.apiKey}&format=json`)
    return this.http.get(`${environment.apiUrl}?method=tag.gettopalbums&tag=${genre}&api_key=${environment.apiKey}&format=json`)
    // return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=rock&api_key=153237df360dc9d3299c5d12048620c0&format=json`)


  }

}
