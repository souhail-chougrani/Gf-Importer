import { Component, OnInit } from '@angular/core';
import { ImportationStoreService } from '../store/importation-store.service';
import { ValidationDataClientSideService } from '../../../@Globals/excel-import/services/validation-data-client-side.service';
import * as yup from "yup";
import { map } from 'rxjs/operators';

@Component({
  selector: 'step-validation',
  templateUrl: './step-validation.component.html',
  styleUrls: ['./step-validation.component.scss']
})
export class StepValidationComponent implements OnInit {
  columns: any[];
  rows: any[]
  constructor(private ImportationStore: ImportationStoreService,
    private validationClientSideService: ValidationDataClientSideService) { }

  ngOnInit() {
    this.ImportationStore.stateWithPropertyChanges.subscribe(
      state => {
        if (state && state.stateChanges && state.stateChanges.verfiedData) {
          // this.rows = state.stateChanges.verfiedData.dataNotValid;
          // this.columns = state.stateChanges.verfiedData.header;
        }
      }
    )
    this.rows = DATA;
    this.columns = ["Compte", "Libelle", "Debit", "Credit"];
  }

  getErrors() {
    this.validationClientSideService.AsyncMessagesValidation(this.rows)
      .pipe(
        map((e: yup.ValidationError[]) => this.fct(e))
      )

      .subscribe(
        res => console.log(res)
      );
  }
  fct(arr: any[]) {
    return arr.map(
      (res: yup.ValidationError) => {
        let Norme = { "Compte": [], "Libelle": [], "Debit": [], "Credit": [] }

        let data = res.inner.reduce((o, curr, i) => {

          o[curr.path] = curr.errors
          return o
        }, {}
        )
        return { ...Norme, ...data }
      }
    )
  }




}
export const DATA =
  [
    {
      "Compte": "Compte",
      "Libelle": "Libelle",
      "Debit": "Debit",
      "Credit": "Credit"
    },
    {
      "Compte": "Compte",
      "Libelle": "Libelle",
      "Debit": "Debit",
      "Credit": "Credit"
    },
    {
      "Compte": "Compte",
      "Libelle": "Libelle",
      "Debit": "Debit",
      "Credit": "Credit"
    },
    {
      "Compte": "Compte",
      "Libelle": "Libelle",
      "Debit": "Debit",
      "Credit": "Credit"
    },
    {
      "Compte": "Compte",
      "Libelle": "Libelle",
      "Debit": "Debit",
      "Credit": "Credit"
    },
    {
      "Compte": "Compte",
      "Libelle": "Libelle",
      "Debit": "Debit",
      "Credit": "Credit"
    },
    {
      "Compte": "Compte",
      "Libelle": "Libelle",
      "Debit": "Debit",
      "Credit": "Credit"
    },
    {
      "Compte": "Compte",
      "Libelle": "Libelle",
      "Debit": "Debit",
      "Credit": "Credit"
    },
    {
      "Compte": "Compte",
      "Libelle": "Libelle",
      "Debit": "Debit",
      "Credit": "Credit"
    },
    {
      "Compte": "Compte",
      "Libelle": "Libelle",
      "Debit": "Debit",
      "Credit": "Credit"
    },
    {
      "Compte": "Compte",
      "Libelle": "Libelle",
      "Debit": "Debit",
      "Credit": "Credit"
    },
    {
      "Compte": "Compte",
      "Libelle": "Libelle",
      "Debit": "Debit",
      "Credit": "Credit"
    },
    {
      "Compte": "Compte",
      "Libelle": "Libelle",
      "Debit": "Debit",
      "Credit": "Credit"
    },
    {
      "Compte": "Compte",
      "Libelle": "Libelle",
      "Debit": "Debit",
      "Credit": "Credit"
    },
    {
      "Compte": "Compte",
      "Libelle": "Libelle",
      "Debit": "Debit",
      "Credit": "Credit"
    },
    {
      "Compte": "Compte",
      "Libelle": "Libelle",
      "Debit": "Debit",
      "Credit": "Credit"
    },
    {
      "Compte": "Compte",
      "Libelle": "Libelle",
      "Debit": "Debit",
      "Credit": "Credit"
    },
    {
      "Compte": "Compte",
      "Libelle": "Libelle",
      "Debit": "Debit",
      "Credit": "Credit"
    },
    {
      "Compte": "Compte",
      "Libelle": "Libelle",
      "Debit": "Debit",
      "Credit": "Credit"
    },
    {
      "Compte": "Compte",
      "Libelle": "Libelle",
      "Debit": "Debit",
      "Credit": "Credit"
    },
    {
      "Compte": "Compte",
      "Libelle": "Libelle",
      "Debit": "Debit",
      "Credit": "Credit"
    },
    {
      "Compte": "Compte",
      "Libelle": "Libelle",
      "Debit": "Debit",
      "Credit": "Credit"
    },
    {
      "Compte": null,
      "Libelle": "ASSURANCES ACCIDENTS DE TRAVAI",
      "Debit": 134203.83,
      "Credit": 0
    },
    {
      "Compte": null,
      "Libelle": "interet tva",
      "Debit": 34420.42,
      "Credit": 0
    },
    {
      "Compte": null,
      "Libelle": "REPRISE SUR SUBVENTION D INVES",
      "Debit": 0,
      "Credit": 36888.9
    },
    {
      "Compte": null,
      "Libelle": "AUTRES PRODUITS NON COURANTS D",
      "Debit": 0,
      "Credit": 2.4
    }
  ]
export const DATAWITHERRORS = [
  {
    "Compte": [
      "Compte must be a `number` type, but the final value was: `NaN` (cast from the value `\"Compte\"`)."
    ],
    "Libelle": [],
    "Debit": [
      "Debit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Debit\"`)."
    ],
    "Credit": [
      "Credit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Credit\"`)."
    ]
  },
  {
    "Compte": [
      "Compte must be a `number` type, but the final value was: `NaN` (cast from the value `\"Compte\"`)."
    ],
    "Libelle": [],
    "Debit": [
      "Debit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Debit\"`)."
    ],
    "Credit": [
      "Credit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Credit\"`)."
    ]
  },
  {
    "Compte": [
      "Compte must be a `number` type, but the final value was: `NaN` (cast from the value `\"Compte\"`)."
    ],
    "Libelle": [],
    "Debit": [
      "Debit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Debit\"`)."
    ],
    "Credit": [
      "Credit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Credit\"`)."
    ]
  },
  {
    "Compte": [
      "Compte must be a `number` type, but the final value was: `NaN` (cast from the value `\"Compte\"`)."
    ],
    "Libelle": [],
    "Debit": [
      "Debit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Debit\"`)."
    ],
    "Credit": [
      "Credit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Credit\"`)."
    ]
  },
  {
    "Compte": [
      "Compte must be a `number` type, but the final value was: `NaN` (cast from the value `\"Compte\"`)."
    ],
    "Libelle": [],
    "Debit": [
      "Debit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Debit\"`)."
    ],
    "Credit": [
      "Credit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Credit\"`)."
    ]
  },
  {
    "Compte": [
      "Compte must be a `number` type, but the final value was: `NaN` (cast from the value `\"Compte\"`)."
    ],
    "Libelle": [],
    "Debit": [
      "Debit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Debit\"`)."
    ],
    "Credit": [
      "Credit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Credit\"`)."
    ]
  },
  {
    "Compte": [
      "Compte must be a `number` type, but the final value was: `NaN` (cast from the value `\"Compte\"`)."
    ],
    "Libelle": [],
    "Debit": [
      "Debit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Debit\"`)."
    ],
    "Credit": [
      "Credit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Credit\"`)."
    ]
  },
  {
    "Compte": [
      "Compte must be a `number` type, but the final value was: `NaN` (cast from the value `\"Compte\"`)."
    ],
    "Libelle": [],
    "Debit": [
      "Debit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Debit\"`)."
    ],
    "Credit": [
      "Credit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Credit\"`)."
    ]
  },
  {
    "Compte": [
      "Compte must be a `number` type, but the final value was: `NaN` (cast from the value `\"Compte\"`)."
    ],
    "Libelle": [],
    "Debit": [
      "Debit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Debit\"`)."
    ],
    "Credit": [
      "Credit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Credit\"`)."
    ]
  },
  {
    "Compte": [
      "Compte must be a `number` type, but the final value was: `NaN` (cast from the value `\"Compte\"`)."
    ],
    "Libelle": [],
    "Debit": [
      "Debit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Debit\"`)."
    ],
    "Credit": [
      "Credit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Credit\"`)."
    ]
  },
  {
    "Compte": [
      "Compte must be a `number` type, but the final value was: `NaN` (cast from the value `\"Compte\"`)."
    ],
    "Libelle": [],
    "Debit": [
      "Debit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Debit\"`)."
    ],
    "Credit": [
      "Credit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Credit\"`)."
    ]
  },
  {
    "Compte": [
      "Compte must be a `number` type, but the final value was: `NaN` (cast from the value `\"Compte\"`)."
    ],
    "Libelle": [],
    "Debit": [
      "Debit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Debit\"`)."
    ],
    "Credit": [
      "Credit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Credit\"`)."
    ]
  },
  {
    "Compte": [
      "Compte must be a `number` type, but the final value was: `NaN` (cast from the value `\"Compte\"`)."
    ],
    "Libelle": [],
    "Debit": [
      "Debit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Debit\"`)."
    ],
    "Credit": [
      "Credit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Credit\"`)."
    ]
  },
  {
    "Compte": [
      "Compte must be a `number` type, but the final value was: `NaN` (cast from the value `\"Compte\"`)."
    ],
    "Libelle": [],
    "Debit": [
      "Debit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Debit\"`)."
    ],
    "Credit": [
      "Credit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Credit\"`)."
    ]
  },
  {
    "Compte": [
      "Compte must be a `number` type, but the final value was: `NaN` (cast from the value `\"Compte\"`)."
    ],
    "Libelle": [],
    "Debit": [
      "Debit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Debit\"`)."
    ],
    "Credit": [
      "Credit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Credit\"`)."
    ]
  },
  {
    "Compte": [
      "Compte must be a `number` type, but the final value was: `NaN` (cast from the value `\"Compte\"`)."
    ],
    "Libelle": [],
    "Debit": [
      "Debit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Debit\"`)."
    ],
    "Credit": [
      "Credit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Credit\"`)."
    ]
  },
  {
    "Compte": [
      "Compte must be a `number` type, but the final value was: `NaN` (cast from the value `\"Compte\"`)."
    ],
    "Libelle": [],
    "Debit": [
      "Debit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Debit\"`)."
    ],
    "Credit": [
      "Credit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Credit\"`)."
    ]
  },
  {
    "Compte": [
      "Compte must be a `number` type, but the final value was: `NaN` (cast from the value `\"Compte\"`)."
    ],
    "Libelle": [],
    "Debit": [
      "Debit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Debit\"`)."
    ],
    "Credit": [
      "Credit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Credit\"`)."
    ]
  },
  {
    "Compte": [
      "Compte must be a `number` type, but the final value was: `NaN` (cast from the value `\"Compte\"`)."
    ],
    "Libelle": [],
    "Debit": [
      "Debit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Debit\"`)."
    ],
    "Credit": [
      "Credit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Credit\"`)."
    ]
  },
  {
    "Compte": [
      "Compte must be a `number` type, but the final value was: `NaN` (cast from the value `\"Compte\"`)."
    ],
    "Libelle": [],
    "Debit": [
      "Debit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Debit\"`)."
    ],
    "Credit": [
      "Credit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Credit\"`)."
    ]
  },
  {
    "Compte": [
      "Compte must be a `number` type, but the final value was: `NaN` (cast from the value `\"Compte\"`)."
    ],
    "Libelle": [],
    "Debit": [
      "Debit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Debit\"`)."
    ],
    "Credit": [
      "Credit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Credit\"`)."
    ]
  },
  {
    "Compte": [
      "Compte must be a `number` type, but the final value was: `NaN` (cast from the value `\"Compte\"`)."
    ],
    "Libelle": [],
    "Debit": [
      "Debit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Debit\"`)."
    ],
    "Credit": [
      "Credit must be a `number` type, but the final value was: `NaN` (cast from the value `\"Credit\"`)."
    ]
  },
  {
    "Compte": [
      "Compte must be a `number` type, but the final value was: `NaN` (cast from the value `NaN`)."
    ],
    "Libelle": [],
    "Debit": [],
    "Credit": []
  },
  {
    "Compte": [
      "Compte must be a `number` type, but the final value was: `NaN` (cast from the value `NaN`)."
    ],
    "Libelle": [],
    "Debit": [],
    "Credit": []
  },
  {
    "Compte": [
      "Compte must be a `number` type, but the final value was: `NaN` (cast from the value `NaN`)."
    ],
    "Libelle": [],
    "Debit": [],
    "Credit": []
  },
  {
    "Compte": [
      "Compte must be a `number` type, but the final value was: `NaN` (cast from the value `NaN`)."
    ],
    "Libelle": [],
    "Debit": [],
    "Credit": []
  }
]