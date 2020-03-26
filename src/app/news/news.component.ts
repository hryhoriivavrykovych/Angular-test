import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  articles: Array<any>;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getArticles().subscribe(data => this.articles = data['articles']);
  }

  searchArticle(source){
    this.newsService.getArticleByID(source).subscribe(data => this.articles = data['articles']);
  }

}
