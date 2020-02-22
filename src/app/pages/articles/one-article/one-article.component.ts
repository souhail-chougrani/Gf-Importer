import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../shared/article.interface';

@Component({
  selector: 'app-one-article',
  templateUrl: './one-article.component.html',
  styleUrls: ['./one-article.component.scss']
})
export class OneArticleComponent{

  @Input() article : Article;

  constructor() { }

}
