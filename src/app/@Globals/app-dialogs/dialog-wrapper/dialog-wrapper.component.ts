import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { AppModalsService } from '../services/app-modals.service';

@Component({
  selector: 'app-dialog-wrapper',
  templateUrl: './dialog-wrapper.component.html',
  styleUrls: ['./dialog-wrapper.component.scss']
})
export class DialogWrapperComponent {

  @Input() config: any = {};

  constructor(private appModalsService: AppModalsService, protected ref: NbDialogRef<DialogWrapperComponent>) { }

  cancel() {
    this.ref.close();
  }

  submit(value) {
    this.appModalsService.close(value);
  }

}
