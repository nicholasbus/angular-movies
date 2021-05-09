import { Component, OnInit } from '@angular/core';
import axios from 'axios'; // used to get movies
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bookmarked',
  templateUrl: './bookmarked.component.html',
  styleUrls: ['./bookmarked.component.scss']
})
export class BookmarkedComponent implements OnInit {

  constructor() { }

  bookmarks = JSON.parse(localStorage.getItem('bookmarks'))

  movies = [];
  
  readonly ROOT_URL = `http://www.omdbapi.com/?apikey=${environment.AK}&i=`;

  // remove a bookmark from local storage and reload the page
  unBookmark(id) {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
    const newBookmarks = bookmarks.filter(movieId => movieId !== id)
    localStorage.setItem('bookmarks', JSON.stringify(newBookmarks))
    window.location.reload()
  }
  
  // loop through bookmarks and add movies to an array for display
  async getMovies(bookmarks) {
    bookmarks.forEach(async id => {
      const movie = await axios.get(this.ROOT_URL+id)
      this.movies.push(movie.data)
    });
  }

  // loads all bookmarked movies upon page load
  ngOnInit(): void {
    this.getMovies(this.bookmarks)
  }

}
