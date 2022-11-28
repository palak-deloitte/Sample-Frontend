import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieImagesService {

  constructor(private http: HttpClient) { }

  getImages(){
    let url = "https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=dangal&callback="
    return this.http.jsonp(url, "callback")
    // .pipe(
    //   map(res => {
    //     return res.results.map(item => {
    //       return new SearchItem(
    //         item.trackName,
    //         item.artistName,
    //         item.trackViewUrl,
    //         item.artworkUrl30,
    //         item.artistId
    //       );
  }
}
