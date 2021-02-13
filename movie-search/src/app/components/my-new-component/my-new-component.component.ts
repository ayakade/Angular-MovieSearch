import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.sass']
})
export class MyNewComponentComponent implements OnInit {
  title = 'Testing123';
  arrOfMovies = [];

  constructor() { 
    
  }

  ngOnInit(): void {
    // Fetch movies, and store them in
    // this.arrOfMovies = ['shrek1', 'shrek the third']
  }

}
