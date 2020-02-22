import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticlesComponent } from './articles/articles.component';
import { FacturesComponent } from './factures/factures.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'articles',
      component: ArticlesComponent,
    },
    {
      path: 'factures',
      component: FacturesComponent
    },
    {
      path: '',
      redirectTo: 'factures',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
