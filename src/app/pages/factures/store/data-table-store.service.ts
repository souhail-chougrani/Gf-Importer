import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTableStoreService extends ObservableStore<DataTableSoreState> {

  constructor() {
    super({
      trackStateHistory: true, logStateChanges: true,

    });
    const initialState = {
      columns: null
    };
    this.setState(initialState, DataTableSoreStateActions.InitializeState);

  }
  get() {
    const ImportedData = this.getState().columns;
    if (ImportedData) {
      return of(ImportedData);
    }
    else {
      return of(null);

    }
  }
}
export interface DataTableSoreState {
  columns: any[];

}
export enum DataTableSoreStateActions {
  InitializeState = 'INITIALIZE_STATE_DataTable',
  ToggelHeadForColumns = 'Toggel_Data_For_COLUMNS',
  ValidCulomns = 'VALIDATE_COLUMNS',
}
