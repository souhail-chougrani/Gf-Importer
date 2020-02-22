import { Component, OnInit } from '@angular/core';
import { ImportationStoreService } from '../store/importation-store.service';
import { ValidationBuilderService } from '../../../@Globals/excel-import/services/validation-builder.service';

@Component({
  selector: 'stepper-container',
  templateUrl: './stepper-container.component.html',
  styleUrls: ['./stepper-container.component.scss']
})
export class StepperContainerComponent implements OnInit {

  SelectHeader: any[]
  AllRequiredColumnIsSelected: boolean = true;
  constructor(
    private importationStore: ImportationStoreService,

  ) { }

  ngOnInit() {
    this.importationStore.stateChanged.subscribe(
      state => {
        if (state) {
          this.AllRequiredColumnIsSelected = state.IsAllRequiredColumnSelected;

        }

      }
    );

  }

  getFiltredData() {

    this.importationStore.validateData().subscribe()
  }


}