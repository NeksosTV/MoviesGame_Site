import { Utilisateur } from './../Models/utilisateur';
import { IMoviesDetails } from './../Models/imovies-details';
import { IMovieTitle } from './../Models/imovie-title';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesGameAPIService {

  private _url : string = 'http://localhost:3000'

  constructor( private _http : HttpClient) { }
  
  public GetAllMoviesTitle() : Observable<any>{
    return this._http.get<any>( `${this._url}/Movies`);
  }

  public checkLogin(body:any):Observable<Utilisateur[]>{
    return this._http.post<Utilisateur[]>(`${this._url}/utilisateur/check`, body)
  }

  public GetAllMoviesDetails(id : number) : Observable<IMoviesDetails>{
    return this._http.get<IMoviesDetails>( `${this._url}/Movies/${id}`);
  }


}
