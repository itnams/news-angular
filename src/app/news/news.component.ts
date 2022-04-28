import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { everything, topHeadlines } from '../endPointApi.spec';
import { NewsEverythingResult, NewsHeadearResult } from './news-result';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  base_url = "https://newsapi.org/v2"
  api_key = "1656923f1ce948cd867a8984dac19768"
  constructor(private httpClient: HttpClient) {
  }
  headears?: NewsHeadearResult;
  everything?: NewsEverythingResult;
  returnLink(endPoint: string): string {
    return this.base_url + endPoint + this.api_key
  }
  loadTopHeadlines() {
    this.httpClient.get<NewsHeadearResult>(this.returnLink(topHeadlines)).subscribe((resp: NewsHeadearResult) => {
      this.headears = resp
    })
  }
  loadEverything() {
    this.httpClient.get<NewsEverythingResult>(this.returnLink(everything)).subscribe((resp: NewsEverythingResult) => {
      this.everything = resp
    })
  }
  ngOnInit(): void {
    this.loadTopHeadlines()
    this.loadEverything()
  }
}
