import { Injectable } from '@angular/core';
import { NbDialogService, NbDialogRef } from '@nebular/theme';

import { DialogWrapperComponent } from '../dialog-wrapper/dialog-wrapper.component';
import { CONFIRM, ALERT } from '../default-configs';

@Injectable({
	providedIn: 'root'
})
export class AppModalsService {

	modal: NbDialogRef<DialogWrapperComponent>;

	constructor(private nbDalogService: NbDialogService) { }

	open(config: any = null) {
		this.modal = this.nbDalogService.open(
			DialogWrapperComponent,
			{
				context: {
					config
				},
				closeOnBackdropClick: false,
				closeOnEsc: false
			}
		)

		return this.modal.onClose;
	}

	close(value: any = null) {
		this.modal.close(value);
	}
}
