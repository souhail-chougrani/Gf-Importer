import { Injectable } from "@angular/core";

import * as XLSX from "xlsx";
import { Observable } from "rxjs";


@Injectable({
  providedIn: "root"
})
export class ExcelService {
  constructor() { }

  loadFile(file: File): Observable<any> {
    // const target: DataTransfer = <DataTransfer>ev.target;
    // if (target.files && target.files.length !== 1) throw new Error("Cannot use multiple files");

    const reader = new FileReader();
    // First and one file ! 
    const fileName = file.name;
    reader.readAsBinaryString(file);
    return this.ReadExcelFile(reader, fileName);
  }

  ReadExcelFile(reader: FileReader, fileName): Observable<any> {
    let workBook: XLSX.WorkBook = null;
    let dataSource: any;

    return Observable.create(observer => {
      reader.onload = () => {
        const data = reader.result;
        workBook = XLSX.read(data, { type: 'binary' });
        dataSource = this.getDataSource(workBook);
        const headers = this.getHeaders(dataSource);
        observer.next({
          data: dataSource,
          sheetNames: this.getListSheetName(workBook),
          fileName: fileName,
          headers: headers
        });
        observer.complete();
      }
    });
  }

  getJsonSheet(workBook: XLSX.WorkBook, name: string) {
    const sheet = workBook.Sheets[name];
    return XLSX.utils.sheet_to_json(sheet, { defval: null });
  }
  getListSheetName(workBook: XLSX.WorkBook) {
    return workBook.SheetNames;
  }
  getHeaders(dataSource: any) {
    const keysSheet = Object.keys(dataSource);
    return keysSheet.reduce((initial, name) => {
      if (dataSource[name].length) {
        initial[name] = Object.keys(dataSource[name][0])
        return initial;
      } else {
        initial[name] = {}
        return initial;
      }
    }, {});
  }

  getDataSource(workBook) {
    return this.getListSheetName(workBook)
      .reduce((initial, name) => {
        initial[name.trim()] = this.getJsonSheet(workBook, name);
        return initial;
      }, {});
  }








}



