import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FacturesComponent } from "./factures.component";

import { TableModule } from "primeng/table";
import { DropdownModule } from "primeng/dropdown";
import { ButtonModule } from "primeng/button";
import {
  NbInputModule,
  NbButtonModule,
  NbCardModule,
  NbActionsModule,
  NbIconModule,
  NbCheckboxModule,
  NbSelectModule,
  NbStepperModule,
  NbTabsetModule,
  NbPopoverModule
} from "@nebular/theme";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { DataTableComponent } from './data-table/data-table.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StepImportationComponent } from './step-importation/step-importation.component';
import { StepValidationComponent } from './step-validation/step-validation.component';
import { StepperContainerComponent } from './stepper-container/stepper-container.component';
import { AppDragNdropDirective } from './app-drag-ndrop.directive';
import { StepMappingColumnsComponent } from './step-mapping-columns/step-mapping-columns.component';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    NbInputModule,
    NbButtonModule,
    NbCardModule,
    NbActionsModule,
    FormsModule,
    ButtonModule,
    NbSelectModule,
    NbCheckboxModule,
    DropdownModule,
    NbIconModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NbStepperModule,
    NbTabsetModule,
    NbPopoverModule
  ],
  declarations: [
    FacturesComponent,
    DataTableComponent,
    StepImportationComponent,
    StepValidationComponent,
    StepperContainerComponent,
    AppDragNdropDirective,
    StepMappingColumnsComponent,
  ]
})
export class FacturesModule { }
