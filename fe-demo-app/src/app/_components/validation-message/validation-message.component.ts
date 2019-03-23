import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationErrorMessages } from 'src/app/_constants/validation-error-messages';

@Component({
  selector: 'app-validation-message',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.css']
})
export class ValidationMessageComponent implements OnInit {
  @Input() control: FormControl;
  @Input() fieldTitle: string;

  errorMessages: any = {};

  constructor() { }

  ngOnInit() {
    this.fieldTitle = this.fieldTitle || 'This field';
    Object.keys(ValidationErrorMessages).forEach((key) => {
      this.errorMessages[key] = ValidationErrorMessages[key].replace(/@FIELD-TITLE/, this.fieldTitle);
    });
  }

}
