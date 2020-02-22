import { Component, OnInit } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';
import { ArticlesService } from '../shared/articles.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit{

  private article: any = {};
  isEdit: boolean = false;

  constructor(public windowRef: NbWindowRef, private articlesService: ArticlesService) {
    
  }

  ngOnInit(){
    let { context } = this.windowRef.config;

    if( context){
      this.article = context;
      this.isEdit = true
    }
  }

  closeModal(){
    this.windowRef.close();
  }

  submitForm(){
    if(this.isEdit){
      this.editArticle()
    } else{
      this.addArticle()
    }
    this.closeModal();
  }

  addArticle(){
    this.articlesService.addArticle(this.article);
  }

  editArticle(){
    this.articlesService.editArticle(this.article);
  }

}
