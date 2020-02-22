import { Component, OnInit } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { AddArticleComponent } from './add-article/add-article.component';
import { Article } from './shared/article.interface';
import { ArticlesService } from './shared/articles.service';
import { MenuItem } from 'primeng/api';
import { ARTICLES_COLS } from './shared/articles-grid-config';

import { AppModalsService } from '../../@Globals/app-dialogs/services/app-modals.service';
import { DefaultModalsService } from '../../@Globals/app-dialogs/services/default-modals.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles: Article[];
  cols : any[] = ARTICLES_COLS;
  selectedarticles : Article[] = [];
  selectedArticle : Article;
  items: MenuItem[];
  SelectedItemsMenu: MenuItem[];

  constructor(private modals: NbWindowService, private articleService: ArticlesService, private dm: DefaultModalsService){}
  
  ngOnInit(): void {
    this.loadArticles();

    this.items = [
      { label: 'Modifier', icon: 'pi pi-pencil', command: (event) => this.OpenAddForm() },
      { label: 'Supprimer', icon: 'pi pi-trash', command: (event) => this.deleteArticle() }
    ];

    this.SelectedItemsMenu = [
      { label: 'Générer facture', icon: 'pi pi-file-o', command: (event) => this.generateInvoice() },
      { label: 'Supprimer', icon: 'pi pi-trash', command: (event) => this.deleteMultiArticles() }
    ];
  }

  OpenAddForm(){
    let modal = this.modals.open(AddArticleComponent, { 
      title: `Ajouter un article`,
      context: this.selectedArticle
    });
    
    modal.onClose.subscribe(() => {
      this.loadArticles();
    });
  }

  loadArticles(){
    this.articleService.getArticles()
        .subscribe( data => this.articles = data);
  }

  deleteArticle(){

    let modalConfig = {
      cancel: true,
      "status": "info",
      "icon": "alert-triangle-outline",
      "title": "Titre",
      "message" : "Voulez vous vraiment supprimer cet article ?",
    }

    this.dm.openInfoAlert(modalConfig).subscribe( data => {
      if(data === 'Oui'){
        this.articleService.deleteArticle(this.selectedArticle);
        this.loadArticles();
      }
    });
  }

  generateInvoice(){
    console.log(this.selectedarticles);
  }

  deleteMultiArticles(){
    this.selectedarticles.map( a => this.articleService.deleteArticle(a));
    this.loadArticles();
  }

  onRowSelect(event) {
    console.log(this.selectedarticles);
  }
  
  onRowUnselect(event) {
    console.log(this.selectedarticles);
  }

  clearSelected(){
    // this.selectedArticle = null;
  }

}
