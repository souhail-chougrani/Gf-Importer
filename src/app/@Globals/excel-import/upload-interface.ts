import { Observable } from "rxjs";

type AOA = any[][];

type RES = { data: AOA; sheets: string[]; fileName: string };

export declare interface ExcelUp {
  loadFile(event: any, index: number): Observable<RES>;

  export(data: AOA, fileName: string): void;
}
