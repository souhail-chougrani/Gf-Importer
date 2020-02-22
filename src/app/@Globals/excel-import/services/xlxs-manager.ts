
import * as XLSX from "xlsx";


export class ExcelManager {

    private _workBook: XLSX.WorkBook = null;
    public get workBook() {
        if (this._workBook) {
            return this._workBook;
        } else {
            throw new Error(" la proprieté _workBook de la class ExcelManagement est null! ");
        }
    }
    public set workBook(value) {
        this._workBook = value;

    }

    constructor(data) {
        this._workBook = XLSX.read(data, { type: 'binary' });
    }


    GetAllSheetJson() {
        return this.GetAllSheetsName()
            .reduce((initial, name) => {
                initial[name] = this.GetSheetJsonByName(name);
                return initial;
            }, {});

    }
    private GetSheetJsonByName(name: string) {
        const sheet = this.workBook.Sheets[name];
        // NOTE:
        // defval :default values for empty cells;
        return XLSX.utils.sheet_to_json(sheet, { defval: null });
    }

    GetAllSheetsName() {
        return this.workBook.SheetNames;
    }
}
