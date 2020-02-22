import { Injectable } from '@angular/core';
import { ExcelResult } from './Models';


@Injectable({
    providedIn: "root"
})
export class ExcelHandler {

    private DataSource: ExcelResult;
    DataByName: any[];
    SheetName: string[];
    FileName: string;
    Header: string[];
    Rows: any[];
    constructor(dataSource: ExcelResult) {
        this.DataSource = dataSource;
    }

    private getDataByName(name: string) {
        const data = this.DataSource.data;
        const DefaultSheetName = this.DataSource.sheetNames[0];
        const DataByName = data[name];
        this.DataByName = IsEmpty(name) ? data[DefaultSheetName] : DataByName;
        return this.DataByName;
    }
    private getHeaders(dataSource: any) {
        let initial = [];
        if (dataSource.length) {
            initial = Object.keys(dataSource[0]);
            return initial;
        } else {
            initial = [];
            return initial;
        }
    }
    getData(name?: string) {
        const dataByName: any[] = this.getDataByName(name);

        this.SheetName = this.DataSource.sheetNames;
        this.FileName = this.DataSource.fileName;
        this.Header = this.getHeaders(dataByName);
        this.Rows = dataByName.slice(0, 10);
        // this.Rows = dataByName
        return {
            sheetName: this.SheetName,
            fileName: this.FileName,
            dataByName: dataByName,
            header: this.Header,
            rows: this.Rows
        };
    }
    // add First elemet of table if data not have header and create default columns
    toggelHeader(addHeader: boolean) {
        // converting addHeader to boolean
        addHeader = !addHeader;
        const dataToTransform: any[] = this.DataByName.length ? this.DataByName : [];
        // dataToTransform[0] should not be null
        if (!dataToTransform[0]) throw new Error("cannot add header to empty data!");
        const keys = Object.keys(dataToTransform[0]);
        const missedElement = this.transformArrayToDefaultObject(keys);
        const DefaultHeader = Object.keys(missedElement);
        const Result = this.mapToNewDefaulColumnes(dataToTransform, DefaultHeader);

        const dataToReturn = addHeader ? [missedElement, ...Result] : [...this.DataByName];


        const header = addHeader ? DefaultHeader : this.Header;
        const rows = addHeader ? dataToReturn.splice(0, 10) : this.Rows;


        return {
            sheetName: this.SheetName,
            fileName: this.FileName,
            dataByName: dataToReturn,
            header: header,
            rows: rows
        };
    }
    private transformArrayToDefaultObject(array: any[]) {
        return array.reduce((init, current, i) => {
            init["colonne " + i] = current;
            return init;
        }, {});
    }
    private mapToNewDefaulColumnes(data: any[], SelectedColumns: any[]) {
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





}

export function IsEmpty(data) {
    if (typeof (data) === 'number' || typeof (data) === 'boolean') {
        return false;
    }
    if (typeof (data) === 'undefined' || data === null) {
        return true;
    }
    if (typeof (data.length) !== 'undefined') {
        return data.length === 0;
    }
    let count = 0;
    for (const i in data) {
        if (data.hasOwnProperty(i)) {
            count++;
        }
    }
    return count === 0;
}


