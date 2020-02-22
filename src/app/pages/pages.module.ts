import { NgModule } from "@angular/core";
import { NbMenuModule } from "@nebular/theme";

import { ThemeModule } from "../@theme/theme.module";
import { PagesComponent } from "./pages.component";
import { DashboardModule } from "./dashboard/dashboard.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { ArticlesModule } from "./articles/articles.module";
import { FacturesModule } from "./factures/factures.module";

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ArticlesModule,
    FacturesModule
  ],
  declarations: [PagesComponent]
})
export class PagesModule {}
