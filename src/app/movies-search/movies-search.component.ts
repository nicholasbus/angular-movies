import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import axios from 'axios'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.scss']
})
export class MoviesSearchComponent implements OnInit {

  constructor() { }

  movies: any;
  
  readonly ROOT_URL = `http://www.omdbapi.com/?apikey=${environment.AK}&s=`;

  // gets all movies from the api using movieName search term
  async getMovies(movieName) {
    this.movies = await (await axios.get(this.ROOT_URL+movieName)).data.Search
    console.log(this.movies)
    this.movieName.setValue('')
  }

  // adds an id to local storage
  bookmark(id) {

    if(!localStorage.getItem('bookmarks')){
      localStorage.setItem('bookmarks', JSON.stringify([id]))
    } else {
      const bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
      bookmarks.push(id)
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    }

  }

  movieName = new FormControl('');

  ngOnInit(): void {
    
  }

}
