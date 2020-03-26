import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  apiKey = 'YOUR_API_KEY_HERE';

  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get('http://newsapi.org/v2/top-headlines?country=ua&apiKey=495bdb22138547418e95af7301c521c6');
  }

  getArticleByID(source: string){
    return this.http.get('http://newsapi.org/v2/top-headlines?country=ua&apiKey=495bdb22138547418e95af7301c521c6');
  }

}