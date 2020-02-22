import { Injectable } from '@angular/core';
import { Article } from './article.interface';
import { of as observableOf,  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private articles: Article[] = [
    {code: "aaaaa", quantite: 15, designation: "aaaa", prix_a: 12.55, prix_v: 14.99},
    {code: "bbbaa", quantite: 15, designation: "ddfgsdfg", prix_a: 55, prix_v: 99}
  ];

  constructor() {}

  getArticles(): Observable<Article[]>{
    return observableOf(this.articles);
  }

  addArticle(article: Article): void{
    this.articles.push(article);

  }

  editArticle(article : Article){
    
    this.articles.map(a => {
      if(a.code == article.code){
        a = article
      }
    });
  }

  deleteArticle(article : Article){
    this.articles = this.articles.filter( a => a.code !== article.code);
  }
}
