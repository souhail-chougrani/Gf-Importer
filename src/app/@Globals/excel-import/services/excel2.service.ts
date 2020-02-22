import { Injectable } from "@angular/core";

import { fromEvent, Observable, Subject } from "rxjs";
import { ExcelManager } from './xlxs-manager';
import { map, tap } from 'rxjs/operators';




@Injectable({
    providedIn: "root"
})
export class ExcelService2 {
    loadFile2(file: any) {
        const fileReader = new FileReader();
        const fileName = file.name;
        fileReader.readAsBinaryString((file));
        const fileReader$ = fromEvent(fileReader, 'load').pipe(
            map(_ => {
                return new ExcelManager(fileReader.result);
            }),
            map((excelManager: ExcelManager) => {
                return {
                    data: excelManager.GetAllSheetJson(),
                    sheetNames: excelManager.GetAllSheetsName(),
                    fileName: fileName
                };
            }),
            tap(console.log)
        );
        return fileReader$;
    }
}


