import { Injectable } from '@angular/core';
import * as yup from "yup";
import { FormBuilder, Validators, AbstractControl, FormControl, FormGroup, FormArray } from '@angular/forms';

export const F = [
  {
    id: "Compte",
    type: "text",
    validations: [
      {
        validator: Validators.pattern("^[0-9]*$"),
        message: 'Compte accepte numbres only'
      },
      {
        validator: Validators.min(5),
        message: 'plus de 5'
      },
      {
        validator: Validators.max(100000),
        message: "moins de 10"
      },
      ,
      {
        validator: Validators.required,
        message: "required"
      }
    ],

  },
  {
    id: "Libelle",
    type: "text",
    validations: [
      ,
      {
        validator: Validators.min(5),
        message: 'plus de 5'
      },
      {
        validator: Validators.max(20),
        message: "moins de 20"
      },
      {
        validator: Validators.required,
        message: "required"
      }
    ],

  },
  {
    id: "Debit",
    type: "text",
    validations: [
      {
        validator: Validators.pattern("^[0-9]*$"),
        message: 'Debit accepte numbres only'
      },

      {
        validator: Validators.min(5),
        message: 'plus de 5'
      },
      {
        validator: Validators.max(10),
        message: "moins de 10"
      },
      {
        validator: Validators.required,
        message: "required"
      }
    ],


  },
  {
    id: "Credit",
    type: "text",
    validations: [
      {
        validator: Validators.pattern("^[0-9]*$"),
        message: 'Credit accepte numbres only'
      },

      {
        validator: Validators.min(5),
        message: 'plus de 5'
      },
      {
        validator: Validators.max(10),
        message: "moins de 10"
      },
      {
        validator: Validators.required,
        message: "required"
      }
    ],


  },
  {
    id: "Solde",
    type: "text",
    validations: [
      {
        validator: Validators.pattern("^[0-9]*$"),
        message: 'Solde accepte numbres only'
      },

      {
        validator: Validators.min(5),
        message: 'plus de 5'
      },
      {
        validator: Validators.max(10),
        message: "moins de 10"
      },

    ],


  },

]

@Injectable({
  providedIn: 'root'
})
export class ValidationBuilderService {
  private _data: RootObject[];

  get Data(): RootObject[] {
    if (this._data && this._data.length === 0)
      throw new Error("Data Should not be empty or null!!!");
    return this._data;
  }

  set Data(arr: RootObject[]) {
    this._data = arr;
  }


  constructor(private fb: FormBuilder) {
  }





  YupGenerator() {
    const yepSchema = this.Data.reduce(this.createYupSchema, {});
    return yup.object().shape(yepSchema);
  }
  // Heleper for YupBuilder
  private createYupSchema(schema, config) {
    const { id, validationType, validations = [] } = config;
    if (!yup[validationType]) {
      return schema;
    }
    let validator = yup[validationType]();
    validations.forEach(validation => {
      const { params, type } = validation;
      if (!validator[type]) {
        return;
      }
      // console.log(type, params);
      validator = validator[type](...params);
    });
    schema[id] = validator;
    return schema;
  }

  //  createControl(fields: FieldConfig[]) {
  createControl() {
    const fields = F
    const group = this.fb.group({});
    fields.forEach(field => {
      if (field.type === "button") return;
      const control = this.fb.control(
        null,
        this.bindValidations(field.validations || [])
      );
      group.addControl(field.id, control);
    });
    return group;
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }
  dataTableFormArray() {
    return this.fb.group(
      { rowsForm: this.fb.array([]) }
    )
  }
  addRow(formArry: FormArray, formGroup: FormGroup) {
    formArry.push(formGroup);
  }

}


export interface Validation {
  type: string;
  params: any[];
}

export interface RootObject {
  id: string;
  type: string;
  validationType: string;
  validations: Validation[];
}

//
export interface ValidatorR {
  validator: any;
  message: string;
}
export interface FieldConfig {
  id?: string;
  type?: string;
  validations?: ValidatorR[];
}



// NOTE: example for YUP:
//[
// {
//   "id": "name",
//     "label": "Full name",
//       "placeholder": "Enter full name",
//         "type": "text",
//           "validationType": "string",
//             "value": "User name",
//               "validations": [
//                 {
//                   "type": "required",
//                   "params": ["this field is required"]
//                 },
//                 {
//                   "type": "min",
//                   "params": [5, "name cannot be less than 5 characters"]
//                 },
//                 {
//                   "type": "max",
//                   "params": [10, "name cannot be more than 10 characters"]
//                 }
//               ]
// },
// {
//   id: "email",
//     label: "Email",
//       placeholder: "Email",
//         type: "text",
//           validationType: "string",
//             value: "email",
//               validations: [
//                 {
//                   type: "required",
//                   params: ["this field is required"]
//                 },
//                 {
//                   type: "min",
//                   params: [5, "email cannot be less than 5 characters"]
//                 },
//                 {
//                   type: "max",
//                   params: [10, "email cannot be more than 10 characters"]
//                 },
//                 {
//                   type: "email",
//                   params: ["please enter a valid email"]
//                 }
//               ]
// },
// {
//   id: "phoneNumber",
//     label: "phone number",
//       type: "text",
//         validationType: "number",
//           value: "7878787878",
//             validations: [
//               {
//                 type: "min",
//                 params: [10, "phone number cannot be less than 10 characters"]
//               },
//               {
//                 type: "max",
//                 params: [10, "phone number cannot be more than 10 characters"]
//               },
//               {
//                 type: "required",
//                 params: ["phone number is required"]
//               }
//             ]
// },
// {
//   id: "total",
//     label: "Total People in Family",
//       placeholder: "family members count",
//         type: "text",
//           validationType: "number",
//             required: false,
//               value: "1",
//                 validations: [
//                   {
//                     type: "required",
//                     params: ["this field is required"]
//                   },
//                   {
//                     type: "min",
//                     params: [1, "there should be atleast 1 family member"]
//                   },
//                   {
//                     type: "max",
//                     params: [5, "max family members can be 5"]
//                   }
//                 ]
// }
// ];
// NOTE:  example for REACTIVEFORM:
//{
//   type: "input",
//     label: "Username",
//       inputType: "text",
//         name: "name",
//           validations: [
//             {
//               name: "required",
//               validator: Validators.required,
//               message: "Name Required"
//             },
//             {
//               name: "pattern",
//               validator: Validators.pattern("^[a-zA-Z]+$"),
//               message: "Accept only text"
//             }
//           ]
// },
// {
//   type: "input",
//     label: "Email Address",
//       inputType: "email",
//         name: "email",
//           validations: [
//             {
//               name: "required",
//               validator: Validators.required,
//               message: "Email Required"
//             },
//             {
//               name: "pattern",
//               validator: Validators.pattern(
//                 "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
//               ),
//               message: "Invalid email"
//             }
//           ]
// },
// {
//   type: "input",
//     label: "Password",
//       inputType: "password",
//         name: "password",
//           validations: [
//             {
//               name: "required",
//               validator: Validators.required,
//               message: "Password Required"
//             }
//           ]
// },
// {
//   type: "radiobutton",
//     label: "Gender",
//       name: "gender",
//         options: ["Male", "Female"],
//           value: "Male"
// },
// {
//   type: "date",
//     label: "DOB",
//       name: "dob",
//         validations: [
//           {
//             name: "required",
//             validator: Validators.required,
//             message: "Date of Birth Required"
//           }
//         ]
// },
// {
//   type: "select",
//     label: "Country",
//       name: "country",
//         value: "UK",
//           options: ["India", "UAE", "UK", "US"]
// },
// {
//   type: "checkbox",
//     label: "Accept Terms",
//       name: "term",
//         value: true
// },
// {
//   type: "button",
//     label: "Save"
// }
//   ];