import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import { ExcelService2 } from '../../../@Globals/excel-import/services/excel2.service';
import { map } from 'rxjs/operators';
import { ValidationDataClientSideService } from '../../../@Globals/excel-import/services/validation-data-client-side.service';
const SelectHeader = [
  { name: "Compte", required: true, disabled: false },
  { name: "Libelle", required: true, disabled: false },
  { name: "Debit", required: true, disabled: false },
  { name: "Credit", required: true, disabled: false },
  { name: "Solde", required: false, disabled: false }
];
export interface StoreState {
  InitializeData: Data;
  toggledData: Data;
  mappedData: { data: any[], header: string[] };
  verfiedData: { dataValid: any[], dataNotValid: any[], header: any[] };
  SelectHeader: any[];
  IsAllRequiredColumnSelected: boolean;
}

export enum ImportaionStoreActions {
  InitializeState = 'INITIALIZE_STATE',
  ToggelHeadForData = 'Toggel_Data_For_Header',
  changeSheet = 'CHANGE_SHEET',
  MappingColumns = 'MAPPING_COLUMNS',
  MappeData = 'MAPPE_DATA',
  ValidateData = 'VALIDATE_DATA',
  ValidationClumns = 'VALIDATION_SELECTED_CULOMNS'
}

@Injectable({
  providedIn: 'root'
})
export class ImportationStoreService extends ObservableStore<StoreState> {

  constructor(private excelService2: ExcelService2, private validationClientSideService: ValidationDataClientSideService) {
    super({
      trackStateHistory: true, logStateChanges: true
    });

    const initialState = {

      InitializeData: null,
      importedData: null,
      mappedData: null,
      toggledData: null,
      VerfiedData: null,
      SelectHeader: SelectHeader,
      IsAllRequiredColumnSelected: false

    };
    this.setState(initialState, ImportaionStoreActions.InitializeState);
  }

  iniData(data, rows, header) {
    const inidata = { data: data, rows: rows, header: header };
    this.setState({ toggledData: inidata }, ImportaionStoreActions.InitializeState);
  }

  toggleHeader(data, rows, header) {

    const td = { data: data, rows: rows, header: header };
    this.setState({ toggledData: td }, ImportaionStoreActions.ToggelHeadForData);
  }
  selectedColumns(header) {
    const state = this.getState().mappedData;
    const data = this.getState().toggledData.data;
    const MappingHeader = { ...state, header: header, data: data };
    this.setState({ mappedData: MappingHeader }, ImportaionStoreActions.MappingColumns);

  }
  VerifiedRequiredColumns(value) {
    this.setState({ IsAllRequiredColumnSelected: value }, ImportaionStoreActions.ValidationClumns)
  }
  mappingColumns(data, header) {
    const state = this.getState().mappedData;
    const mapping = { data: data, header: header };

    this.dispatchState({ mappedData: mapping }, false);
  }
  validateData() {
    const state = this.getState().mappedData;
    const data = state.data;
    const header = state.header;
    const dataTransormed = this.mapToNewColumnes(data, header);
    return this.validationClientSideService.AsyncValidationData(dataTransormed).pipe(
      map(e => {
        const verfiedData = { dataValid: e.dataValid, dataNotValid: e.dataNotValid, header: header }
        this.setState({ verfiedData: verfiedData }, ImportaionStoreActions.ValidateData)
        return e;
      })

    )

  }

  // Helper function
  mapToNewColumnes(data: any[], DefaultColumns: any[]) {
    const dataTransormed = data.map(e => {
      return Object.keys(e).reduce((init, curr, i) => {
        if (DefaultColumns[i])
          init[DefaultColumns[i]] = e[curr];
        return init;
      }
        , {});
    });
    return dataTransormed;

  }


}
export interface ExcelResult {
  data: {};
  sheetNames: string[];
  fileName: any;
}
class Data {
  data: any[];
  rows: any[];
  header: string[];

}



