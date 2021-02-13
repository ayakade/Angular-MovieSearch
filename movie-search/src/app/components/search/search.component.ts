import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MovieapiService } from 'src/app/services/movieapi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})

export class SearchComponent implements OnInit {
  searchForm:any;
  movie: any;

  constructor(private fB: FormBuilder, private mApi: MovieapiService) {
    this.searchForm = this.fB.group({
      search: '',
    });
  }

  clickMe(){
    console.log('clicked');
  }

  ngOnInit(): void {
    this.mApi
     .getMovies<any[]>()
     .subscribe((data: any[]) => {
       console.log(data);
       this.movie = data;
    });
  }

}
