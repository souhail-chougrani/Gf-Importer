import { Injectable } from "@angular/core";

import * as yup from "yup";

// Yup Validation Package : https://github.com/jquense/yup

@Injectable({
  providedIn: "root"
})
export class YupValidationService {
  constructor() {}

  // Schema builder from JSON Object RULES
  createSchemaBuilder(config, schema) {
    let { _type, _dBName, _taille, _nullable, _obligatoire, _unique } = config;

    let validations = [_taille, _nullable, _obligatoire, _unique];

    if (!yup[_type]) {
      return schema;
    }

    let validator = yup[_type]();

    validations.forEach(validation => {
      if (_obligatoire) {
        validator = validator["required"]();
      }

      if (_nullable) {
        validator = validator["nullable"]();
      }
    });

    schema[_dBName] = validator;
    return schema;
  }

  // Schema builder from JSON Object TEST
  schemaBuilder(config, schema) {
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

      validator = validator[type](...params);
    });
    schema[id] = validator;
    return schema;
  }
}
