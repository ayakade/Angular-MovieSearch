import { Component, OnInit } from '@angular/core';
import { MovieapiService } from 'src/app/services/movieapi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  todos: any;
  inputHighlight: string =  'red';
  movies: any;

  constructor(private movieAPI: MovieapiService) {

    this.todos = [
      {id: 1, content: 'eat'},
      {id: 2, content: 'sleep'},
    ]
  }

  searchMovie(){
    let searchTerm = 'blond'; // Get that from an input control.
    this.movieAPI.getMovies(searchTerm)
    .subscribe(
      // This is our callback when the getMovies returns some data
      (data:any) =>{
        this.movies = data['Search']; // data.Search;
    })
  }

  changeBorder(e: any, color: string){
    console.log(e.target)
    e.target.style.borderColor = color;
    console.log(color)
  }

  onKeyUp(event: any, data: string) {
    console.log( `Key Up: ${event.target.value} Data: ${data}`);
  }

  onKeyDown(event: any) {
    console.log( `Key Down: ${event.target.value}`);
  }

  onKeyPress(event: any) {
    console.log( `Key Press: ${event.target.value}`);
  }

  ngOnInit(): void {
    this.inputHighlight = 'red'
  }
}
