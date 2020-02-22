import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ExcelService2 } from '../../../@Globals/excel-import/services/excel2.service';
import { ExcelHandler } from '../../../@Globals/excel-import/services/excel-handler';
import { ImportationStoreService } from '../store/importation-store.service';

@Component({
  selector: 'step-importation',
  templateUrl: './step-importation.component.html',
  styleUrls: ['./step-importation.component.scss']
})
export class StepImportationComponent implements OnInit {
  columns = [];
  rows: any[];
  sheets: string[];
  fileName: string = "";
  selectedsheet: string;

  // Handling matching definitions
  SelectHeader: any[];

  loading: boolean = false;
  headerForm = new FormControl(false);
  DisplayDragbleArea = true;
  excelHandler: ExcelHandler;
  subs = new Subscription();

  constructor(
    private ExcelService: ExcelService2,
    private importationStore: ImportationStoreService
  ) { }

  ngOnInit() {


  }

  loadFile(event) {
    this.DisplayDragbleArea = false;
    this.reset();
    this.ExcelService.loadFile2(event).subscribe(res => {
      this.excelHandler = new ExcelHandler(res);
      const result = this.excelHandler.getData();
      this.sheets = result.sheetName;
      this.rows = result.rows;
      this.columns = result.header;
      this.importationStore.iniData(result.dataByName, result.rows, result.header);
    });

  }
  init(values) {
    this.fileName = values.fileName;
    this.sheets = values.sheetNames;
  }
  onFileDropped($event) {
    this.prepareFilesList($event);
  }

  prepareFilesList(files: any) {
    const FirstFile = files[0];
    this.loadFile(FirstFile);
  }
  fileBrowseHandler(files) {
    this.prepareFilesList(files);
  }


  headerSelect() {
    const result = this.excelHandler.toggelHeader(this.headerForm.value);
    this.columns = result.header;
    this.rows = result.rows;
    this.importationStore.toggleHeader(result.dataByName, result.rows, result.header);

  }

  changeSheet() {
    this.headerForm.reset();
    const result = this.excelHandler.getData(this.selectedsheet);
    this.columns = result.header;
    this.rows = result.rows;
  }
  reset() {
    this.headerForm.reset();
    this.selectedsheet = "";
  }
}
