import {
  Component, OnInit, Input, ViewChild, TemplateRef, ChangeDetectionStrategy,
  OnChanges, SimpleChanges, EventEmitter
} from '@angular/core';
import { TableColumn } from '@swimlane/ngx-datatable';
import { ImportationStoreService } from '../store/importation-store.service';
import { FormGroup, FormArray } from '@angular/forms';
import { DATAWITHERRORS } from '../step-validation/step-validation.component';
import { ValidationBuilderService, FieldConfig, F } from '../../../@Globals/excel-import/services/validation-builder.service';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {


  @ViewChild("hdrTpl", { static: true }) hdrTpl: TemplateRef<any>;
  editing = {};
  displayEdit = false;
  SelectedHeader = {};
  lengthOfRequiredColumns = 0;
  ignorDefaut = { "name": "Ne pas importer", "required": "null", "disabled": "false" }
  displayMode: string;
  // rows
  private _rows: any[] = []
  @Input('dataSource')
  get rows(): any[] {
    return [...this._rows]
  };
  set rows(arr) {
    arr = arr ? arr : [];
    this._rows = [...arr];
    //
  }

  @Input('displaySelects')
  displaySelects: boolean;
  // columns
  private _columns: any[]
  @Input('header')
  get columns() {
    return this._columns

  }
  set columns(arr: any[]) {
    if (this.rows && this.rows.length) {

      this._columns = [...this.columnTransformation(arr)];
      this.displayMode = this._columns.length > 6 ? 'standard' : 'force';
    }

  }

  @Input('ListColumns')
  options: any[] = [
    { name: "Compte", required: true, disabled: false },
    { name: "Libelle", required: true, disabled: false },
    { name: "Debit", required: true, disabled: false },
    { name: "Credit", required: true, disabled: false },
    { name: "Solde", required: false, disabled: false }
  ];
  DataWithErrors = DATAWITHERRORS;
  form: FormGroup;
  constructor(private ImportationStore: ImportationStoreService, private formB: ValidationBuilderService) {

  }
  ngOnInit() {
    console.log("ssss")
    this.form = this.formB.dataTableFormArray()
    this.rows.forEach(e => {
      const formA = (this.form.get("rowsForm") as FormArray)
      const formG = this.formB.createControl();
      this.formB.addRow(formA, formG);
    }
    )

    console.log(this.form)
  }

  columnTransformation(columns: any[]) {

    return columns.map(e => {
      return <TableColumn>{ name: e, prop: e, headerTemplate: this.hdrTpl }
    });

  }

  addSelectHeader(option, columnName) {
    if (this.SelectedHeader[columnName]) {
      this.updateOption(this.SelectedHeader[columnName], false);
      this.updateOption(option, true);
      this.SelectedHeader[columnName] = option;
    } else {
      this.updateOption(option, true);
      this.SelectedHeader[columnName] = option;
    }
    const selectedHeader = this.getSelectedHeaders(this.SelectedHeader);

    this.ImportationStore.selectedColumns(selectedHeader);
    const condistion = this.options.filter(e => e.required).every(e => e.disabled);
    this.ImportationStore.VerifiedRequiredColumns(condistion);
  }


  updateOption(newOptionState, value: boolean) {

    const optionToUpdate = this.options.find(e => e.name === newOptionState.name);
    const index = this.options.indexOf(optionToUpdate);
    this.options[index] = { ...newOptionState, disabled: value };
  }
  getSelectedHeaders(arr) {
    return Object.values(arr).map((e: any) => e.name).filter(e => e !== "Ne pas importer");
  }

  updateValue(eveànt, cell: string, rowIndex) {
    let data = [];
    // console.log('inline editing rowIndex', rowIndex);
    this.editing[rowIndex + '-' + cell] = false;
    // this.rows[rowIndex][cell.trim()] = event.target.value;
    // this.rows = [...this.rows];

  }
  update() {
    this.displayEdit = !this.displayEdit;
  }

  showEdit() {
    this.displayEdit = !this.displayEdit;
  }
  getColErr(colName, i) {
    return this.DataWithErrors[i][colName.trim()];
  }
  getcontrol(rowIndex, columnName) {
    return this.form.get('rowsForm')['controls'][rowIndex]['controls'][columnName]
  }

}
