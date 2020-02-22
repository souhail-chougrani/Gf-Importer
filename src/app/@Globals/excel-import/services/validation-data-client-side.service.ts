import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataProcessed, AsyncArray } from '../utilities';
import * as yup from "yup";

@Injectable({
  providedIn: 'root'
})
export class ValidationDataClientSideService {
  // shema = yup.object({
  //   Compte: yup.number().required(),
  //   Libelle: yup.string().required(),
  //   Debit: yup.number().required(),
  //   Credit: yup.number().required(),
  //   Solde: yup.number()
  // });

  shema = yup.object({
    Id: yup.number().required(),
    Name: yup.string().required(),
  });
  constructor() {


  }

  AsyncValidationData(arr: any[]): Observable<DataProcessed<any>> {
    const dataAsync = new AsyncArray(arr);
    return dataAsync.splitResultAsync(e => {
      return this.shema.isValid(e);
    });
  }


  // NOTE:
  // for now  this function should be allways get Not Valid data :
  // it s mean : fn:===> AsayncMessagesValidation should be called after  fn:===> AsyncValidationData
  AsyncMessagesValidation(dataNotValid: any[]): Observable<any> {
    const dataAsync = new AsyncArray(dataNotValid);
    return dataAsync.mapAsync(e => {
      // NOTE: abortEarly for get all object errors !
      return this.shema.validate(e, { abortEarly: false }).catch(err => err);
    });

  }
  mappingErrors(err: yup.ValidationError) {

    const keys = Object.keys(err.value);

    keys.map(
      (k, i) => { err.inner[i].message }
    );
    return;

  }

}
