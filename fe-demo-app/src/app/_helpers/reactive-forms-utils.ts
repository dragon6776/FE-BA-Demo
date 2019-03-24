import { FormGroup } from '@angular/forms';

  /**
   * Marks all controls in a form group as touched
   * @param formGroup - The form group to touch
   */

  export function markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      if (control.controls) { // control is a FormGroup
        markFormGroupTouched(control);
      } else { // control is a FormControl
        control.markAsTouched();
      }
    });
  }