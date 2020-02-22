import { Injectable } from '@angular/core';
import { AppModalsService } from './app-modals.service';
import { ALERT, CONFIRM } from '../default-configs';

@Injectable({
  providedIn: 'root'
})
export class DefaultModalsService {

  constructor(private appModals: AppModalsService){}

  openInfoAlert(options = {}){
    return this.appModals.open({...ALERT, ...options})
  }

  openConfirmDialog(options = {}){
    return this.appModals.open({...CONFIRM, ...options});
  }

}
