import { HttpClient } from '@angular/common/http';
import { IMovieTitle } from './../../Models/imovie-title';
import { Component, OnInit } from '@angular/core';
import { MoviesGameAPIService } from 'src/app/Servives/movies-game-api.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  public movies : IMovieTitle[] = [];
  result = "";
 
  constructor( private _api : MoviesGameAPIService, private httpClient:HttpClient) { }  
  
  check(movie){
    let other = this.movies.find(m => m.tconst != movie.tconst);
    if(other.startYear < movie.startYear){this.result ="Tu as Perdu"}
    else{this.result="Tu as Gagné"}
    this.httpClient.post('http://localhost:3000/movies/result', {
      movie_id_1 : movie.tconst,
      movie_id_2 : other.tconst,
      resultat : this.result
    }).subscribe(()=>console.log(42))
    

  }

  replay(){
    this.result = "";
    this.ngOnInit();
  }
  ngOnInit(): void {
    this._api.GetAllMoviesTitle().subscribe(
      (data) => this.movies = data,
      (err) => console.error(err),
      () => console.log('Fin de l\'observation')
      
    );
  }
}

