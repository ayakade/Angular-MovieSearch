import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class MovieapiService {
  readonly apikey = 'fe90ea07';
  readonly api = `https://www.omdbapi.com/?apikey=${this.apikey}&type=movie&r=json`;

  constructor(private http:HttpClient) {}

  public getMovies<T>(keyword: string): Observable<T>{
    return this.http.get<T>(`${this.api}&s=${keyword}`)
  }
  // baseUrl:string = 'http://www.omdbapi.com/';

  // constructor(private http: HttpClient) { }

  // public getMovies<T>(): Observable<T>{
  //   return this.http.get<T>(`${this.baseUrl}?i=tt3896198&apikey=fe90ea07`);
  // }
}
