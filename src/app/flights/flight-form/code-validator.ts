import {AbstractControl, FormControl, ValidationErrors} from '@angular/forms';

export const flightCodeValidator = (formControl: AbstractControl): ValidationErrors | null => {
  return (formControl.value as string).startsWith('SK') ? null : {'incrrectCode': true};
};
