import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbInputModule, 
  NbCardModule, 
  NbButtonModule,
  NbUserModule,
  NbWindowModule,
  NbIconModule,
  NbActionsModule,
  NbSelectModule} 
from '@nebular/theme';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { FormsModule } from '@angular/forms';
import { ContextMenuModule } from 'primeng/contextmenu';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { OneArticleComponent } from './one-article/one-article.component';
import { GlobalModule } from '../global/global.module';

@NgModule({
  imports: [
    ThemeModule,
    FormsModule,
    NbWindowModule.forChild(),
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbActionsModule,
    NbSelectModule,
    ContextMenuModule,
    MenuModule,
    TableModule,
    GlobalModule
  ],
  declarations: [
    ArticlesComponent,
    ListArticlesComponent,
    AddArticleComponent,
    OneArticleComponent
  ],
  entryComponents: [
    AddArticleComponent,
  ]
})
export class ArticlesModule { }
