import { Component, OnInit, TemplateRef, ViewChild, ChangeDetectionStrategy } from "@angular/core";

import * as yup from "yup";
import { ExcelService } from "../../@Globals/excel-import/services/excel-service.service";
import { RULES } from "../../@Globals/excel-import/rules";

import * as _ from "lodash";
import { YupValidationService } from "../../@Globals/excel-import/services/yup-validation.service";

import { FormControl } from '@angular/forms';

import { map, skip, switchMap, tap } from 'rxjs/operators';
import { from, Observable } from 'rxjs';
import { DataTableComponent } from './data-table/data-table.component';
import { DataProcessed } from '../../@Globals/excel-import/utilities';
const DATA_Model = [
  { name: "Compte", required: true, disabled: false },
  { name: "Libelle", required: true, disabled: false },
  { name: "Debit", required: true, disabled: false },
  { name: "Credit", required: true, disabled: false },
  { name: "Solde", required: false, disabled: false }
];



export class AsyncArray {

  data: any[];
  constructor(arr) {
    this.data = arr
  }

  // split result to valide an not valid data :  this function should retun data LIKE =>
  //   {dataValid:[],dataNotValid:[]}
  splitResultAsync(predicate) {
    // Take a copy of the array, it might mutate by the time we've finished
    const data = Array.from(this.data);
    // Transform all the elements into an array of promises using the predicate
    // as the promise
    return from(

      Promise.all(data.map((element, index) => predicate(element, index, data)))
        // Use the result of the promises to call the underlying sync filter function
        .then(result => {
          return data.reduce((init, curr, i) => {
            if (result[i]) {
              init = { ...init, dataValid: [...init["dataValid"], data[i]] };
            } else {
              init = { ...init, dataNotValid: [...init["dataNotValid"], data[i]] };
            }
            return init;
          }, { dataValid: [], dataNotValid: [] });
        })
    );
  }
  filterAsync(predicate) {
    // Take a copy of the array, it might mutate by the time we've finished
    const data = Array.from(this.data);
    // Transform all the elements into an array of promises using the predicate
    // as the promise
    return from(

      Promise.all(data.map((element, index) => predicate(element, index, data)))
        // Use the result of the promises to call the underlying sync filter function
        .then(result => {
          return data.map((element, index) => {
            return result[index];
          });
        })
    );
  }

}

@Component({
  selector: "app-factures",
  templateUrl: "./factures.component.html",
  styleUrls: ["./factures.component.scss"],
})
export class FacturesComponent implements OnInit {
  @ViewChild(DataTableComponent, { static: true }) dataTableRef: DataTableComponent;
  data: any[] = [];
  headers: any;
  columns = [];
  rows: any[];
  sheets: string[];
  fileName: string = "";
  selectedsheet: string;
  currentSheetName: string;
  header: any[];
  dataToProcess: any[];
  dataValid: any[];
  dataNotValid: any[];
  cleanData: any[];
  // Handling matching definitions
  SelectHeader: any[];

  loading: boolean = false;
  includeHeader: boolean = false;
  isValidMatch: boolean;
  headerForm = new FormControl(false);
  constructor(
    private excelService: ExcelService,
    private validateService: YupValidationService,
  ) { }

  ngOnInit(): void {
    this.SelectHeader = [
      { name: "Compte", required: true, disabled: false },
      { name: "Libelle", required: true, disabled: false },
      { name: "Debit", required: true, disabled: false },
      { name: "Credit", required: true, disabled: false },
      { name: "Solde", required: false, disabled: false }
    ];
    this.ConditionValidationCombinaisonColumns();

  }


  loadFile(event) {
    this.SelectHeader = [
      { name: "Compte", required: true, disabled: false },
      { name: "Libelle", required: true, disabled: false },
      { name: "Debit", required: true, disabled: false },
      { name: "Credit", required: true, disabled: false },
      { name: "Solde", required: false, disabled: false }
    ];
    this.isValidMatch = false;
    this.headerForm.reset();
    this.loading = true;
    this.selectedsheet = "";
    this.excelService.loadFile(event).subscribe(
      res => {
        this.fileName = res.fileName;
        this.data = res.data;
        this.headers = res.headers;
        this.sheets = res.sheetNames;
        //
        this.currentSheetName = [""];
        this.dataToProcess = res.data[this.currentSheetName]
        this.rows = res.data[this.currentSheetName].slice(0, 10);
        this.header = res.headers[this.currentSheetName];
        this.columns = this.header;
        this.loading = false;
        // clear traget from payloaded data
        console.log(
          this.dataToProcess
        )
      }
    );
  }



  headerSelect() {
    this.isValidMatch = false;
    this.SelectHeader = [
      { name: "Compte", required: true, disabled: false },
      { name: "Libelle", required: true, disabled: false },
      { name: "Debit", required: true, disabled: false },
      { name: "Credit", required: true, disabled: false },
      { name: "Solde", required: false, disabled: false }
    ];
    const dataToTransform: any[] = this.data[this.currentSheetName];

    if (!this.headerForm.value) {
      if (dataToTransform && dataToTransform.length) {
        const keys = Object.keys(dataToTransform[0]);
        const missedElemet = this.transformArrayToDefaultObject(keys);
        const DefaultColumnes = Object.keys(missedElemet);
        const Result = this.mapToNewDefaulColumnes(dataToTransform, DefaultColumnes);

        const dataToReturn = [missedElemet, ...Result];
        this.columns = DefaultColumnes;
        this.rows = dataToReturn.slice(0, 10);
        this.dataToProcess = dataToReturn;
      } else {

        console.error("headerSelect fn problem!!!");
      }
    } else {

      this.rows = dataToTransform.slice(0, 10);
      this.columns = this.header;
      this.dataToProcess = dataToTransform;
    }

    console.log(this.dataToProcess);

  }
  transformArrayToDefaultObject(array: any[]) {
    return array.reduce((init, current, i) => {
      init["colonne " + i] = current;
      return init;
    }, {});
  }
  mapToNewDefaulColumnes(data: any[], SelectedColumns: any[]) {
    const dataTransormed = data.map(e => {
      return Object.keys(e).reduce((init, curr, i) => {
        if (SelectedColumns[i])
          init[SelectedColumns[i]] = e[curr];
        return init;
      }
        , {});
    });
    return dataTransormed;

  }

  changeSheet() {
    this.isValidMatch = false;
    this.SelectHeader = [
      { name: "Compte", required: true, disabled: false },
      { name: "Libelle", required: true, disabled: false },
      { name: "Debit", required: true, disabled: false },
      { name: "Credit", required: true, disabled: false },
      { name: "Solde", required: false, disabled: false }
    ];
    this.headerForm.reset();
    this.currentSheetName = this.selectedsheet;
    this.rows = this.data[this.selectedsheet].slice(0, 10);
    this.dataToProcess = this.data[this.selectedsheet]
    this.columns = this.headers[this.selectedsheet];
  }

  testdata() {
    // const dataToPross = this.dataToProcess;
    // console.log(dataToPross)
    // this.stateManagementService.headerSelected.pipe(
    //   // unsubscribe
    //   tap(e => console.log(e)),
    //   map(e => {
    //     this.columns = e;
    //     this.dataToProcess = this.mapToNewDefaulColumnes(dataToPross, e);
    //     console.log("Mapping with the new columns", this.dataToProcess)
    //     return this.dataToProcess;
    //   }),
    //   switchMap((list: any[]) => this.AsyncValidationData(list))
    // ).subscribe(
    //   res => {
    //     console.log("after process...", res);
    //     this.rows = res.dataNotValid;
    //     this.dataValid = res.dataValid;
    //   }
    // );

  }
  getValidatedData() {
    // this.dataTableRef.CleanData.subscribe(
    //   cleanData => {
    //     this.cleanData = [...cleanData, ...this.dataValid];
    //     console.log(this.cleanData);
    //   }
    // )
  }
  transformArrayToObject(array: any[]) {
    return array.reduce((init, current) => {
      init[current] = current;
      return init;
    }, {});
  }
  mapToNewColumnes(data: any[], DefaultColumns: any[]) {
    const dataTransormed = data.map(e => {
      return Object.keys(e).reduce((init, curr, i) => {
        init[DefaultColumns[i]] = e[curr];
        return init;
      }
        , {});
    });
    return dataTransormed;

  }





  verifyMatchingV() {

  }

  verifyDispo(value) {
  }

  AsyncValidationData(arr: any[]): Observable<DataProcessed<any>> {

    const dataAsync = new AsyncArray(arr);
    const shema = yup.object({
      Compte: yup.number().required(),
      Libelle: yup.string().required(),
      Debit: yup.number().required(),
      Credit: yup.number().required(),
      Solde: yup.number()
    });


    return dataAsync.splitResultAsync(e => {
      return shema.isValid(e);
    })


  }

  ConditionValidationCombinaisonColumns() {
    //   this.stateManagementService.validatCombinaisonHeader.pipe(
    //     // unsubscribe
    //   ).subscribe(

    //     res => {
    //       this.isValidMatch = res;
    //     }
    //   );
    // }

  }


}

