import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieapiService } from 'src/app/services/movieapi.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  movie_detail_id: string = 'nothing';
  movie_detail: any;
  actors: any;

  constructor(private route:ActivatedRoute, private movieAPI: MovieapiService) {
    this.route.params.subscribe( // subscription
      params => {
        this.movie_detail_id = params['id'];
        this.getMovieDetailFromAPICall(this.movie_detail_id);
      }
    );
  }

  getMovieDetailFromAPICall(imdbID:string){
    // API CALL
    this.movieAPI.getMovieDetails(this.movie_detail_id)
    .subscribe(
      (data:any) =>{
        this.movie_detail = data;
        console.log(data);
        this.actors = data.Actors.split(',');
    })
  }

  ngOnInit(): void {
  }

}
