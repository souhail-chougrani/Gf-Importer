import { Component, OnInit, Input } from '@angular/core';
import { of } from 'rxjs';
import { ImportationStoreService } from '../store/importation-store.service';

@Component({
  selector: 'step-mapping-columns',
  templateUrl: './step-mapping-columns.component.html',
  styleUrls: ['./step-mapping-columns.component.scss']
})
export class StepMappingColumnsComponent implements OnInit {
  columns: any[];
  rows: any[];
  dataToMapp: any[];
  @Input()
  SelectHeader;
  constructor(private importationStore: ImportationStoreService) { }

  ngOnInit() {
    this.importationStore.stateWithPropertyChanges.subscribe(state => {
      if (state && state.state && state.stateChanges.toggledData) {
        const states = state.state;
        const toggledData = states.toggledData;
        this.columns = toggledData.header;
        this.rows = [...toggledData.rows];
        this.dataToMapp = toggledData.data;
      }
    });

  }
}
