import { Component, OnInit } from '@angular/core';
import { MovieapiService } from 'src/app/services/movieapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  movies: any;
  searchKey: any;

  constructor(private movieAPI: MovieapiService, private route: ActivatedRoute) {

  }

  searchMovie(){
    let searchTerm = this.searchKey; // Get that from an input control.
    this.movieAPI.getMovies(searchTerm)
    .subscribe(
      // This is our callback when the getMovies returns some data
      (data:any) =>{
        this.movies = data['Search']; // data.Search;
    })
  }

  onKeyUp(event: any, data: string) {
    console.log( `Key Up: ${event.target.value} Data: ${data}`);
    this.searchKey = event.target.value;
  }

  onKeyDown(event: any) {
    console.log( `Key Down: ${event.target.value}`);
  }

  onKeyPress(event: any) {
    console.log( `Key Press: ${event.target.value}`);
  }

  ngOnInit(): void {
  }
}
