import { AbstractControl, ValidatorFn, FormControl, AsyncValidator, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Injectable } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Observable, timer } from 'rxjs';
import { map, catchError, debounceTime, switchMap } from 'rxjs/operators';

export function matchOtherValidator(otherControlName: string): ValidatorFn {

    let thisControl: FormControl;
    let otherControl: FormControl;

    return function matchOtherValidate(control: FormControl) {

        if (!control.parent) {
            return null;
        }

        // Initializing the validator.
        if (!thisControl) {
            thisControl = control;
            otherControl = control.parent.get(otherControlName) as FormControl;
            if (!otherControl) {
                throw new Error('matchOtherValidator(): other control is not found in parent group');
            }
            otherControl.valueChanges.subscribe(() => {
                thisControl.updateValueAndValidity();
            });
        }

        if (!otherControl) {
            return null;
        }

        if (otherControl.value !== thisControl.value) {
            return {
                matchOther: true
            };
        }

        return null;
    };
}

export function uniqueUserNameValidator(userService: UserService): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
        return timer(500).pipe(switchMap(() => {
            return userService.isUserNameTaken(control.value).pipe(
                map(isTaken => {
                    return (isTaken ? { uniqueUserName: true } : null);
                }),
                catchError(() => null)
            );
        }));
    };
}
