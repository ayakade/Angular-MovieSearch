import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class MovieapiService {
  baseUrl:string = 'http://www.omdbapi.com/';

  constructor(private http: HttpClient) { }

  public getMovies<T>(): Observable<T>{
    return this.http.get<T>(`${this.baseUrl}?i=tt3896198&apikey=fe90ea07`);
  }
}
