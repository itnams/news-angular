import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { topHeadlines } from '../endPointApi.spec';
import { NewsResult } from './news-result';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  base_url = "https://newsapi.org/v2"
  api_key = "1656923f1ce948cd867a8984dac19768"
  link = ""
  constructor(private httpClient: HttpClient) {
  }
  news?: NewsResult;
  loadTopHeadlines(){
    this.link = this.base_url + topHeadlines + this.api_key
    this.httpClient.get<NewsResult>(this.link).subscribe((resp: NewsResult)=> {
          this.news = resp
    })
  }
  
  ngOnInit(): void {
    this.loadTopHeadlines()
  }

}
