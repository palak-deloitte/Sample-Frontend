import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { MovieImagesService } from '../movie-images.service'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})



export class DashboardComponent implements OnInit {

  
  movies=['dangal','pk','lucy','dhoom', 'spiderman', 'barfi']
  recommendationList:any[]=[];
  trendingList: any[] =[];
  topRatedList: any[] =[];



  
  recommendation:any;
  trending:any;
  topRated:any;


  constructor(private http:HttpClient) { 
    for(var c of this.movies){
      http.jsonp('https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query='+c, 'callback')
      .subscribe(res => {
      this.recommendationList.push(res);
      return this.recommendation = res;
      });
    }

    // this.userUrl = "http://localhost:8083/api/users/"
    // http.get(this.userUrl).subscribe(e => {
    //   console.log(e);
    //   return this.allUsers = e;

    // });
  }

  ngOnInit(): void {    
  }

  getRecommendation(){
    return this.recommendationList;
  }

  getTrending(){
    return this.trendingList;
  }

  getTopRated(){
    return this.topRatedList;
  }

}
