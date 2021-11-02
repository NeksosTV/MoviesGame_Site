import { MoviesGameAPIService } from 'src/app/Servives/movies-game-api.service';
import { Component, OnInit } from '@angular/core';
import { IMoviesDetails } from 'src/app/Models/imovies-details';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent implements OnInit {


  public movies? : IMoviesDetails;   // le ? permet de dire qu'il peut etre null
  private _id? : number;

  constructor( private _api : MoviesGameAPIService, private _route : ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe(
      (params) => this.onIdReceive(params)
    );
}

private onIdReceive(params : Params){
  this._id = parseInt(params['id'])
  this._api.GetAllMoviesDetails(this._id).subscribe(
    (data) => this.movies = data,
    (err) => console.error(err),
    () => console.log('Fin de l\'observation')  
  );
}

}
