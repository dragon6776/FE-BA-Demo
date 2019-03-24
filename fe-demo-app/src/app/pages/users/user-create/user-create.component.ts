import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { markFormGroupTouched } from 'src/app/_helpers/reactive-forms-utils';
import { UserService } from 'src/app/_services/user.service';
import { matchOtherValidator, uniqueUserNameValidator } from 'src/app/_helpers/custom-validators';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  userForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', [
        Validators.required,
        Validators.minLength(3),
      ], [uniqueUserNameValidator(this.userService)]],
      password: ['', Validators.required],
      confirmPassword: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
        matchOtherValidator('password')
      ]],
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.minLength(6)
      ]]
    });

    this.userForm.controls.userName.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(res => {
        console.log(`debounced text input value ${res}`);
      });
  }

  onSubmit() {
    markFormGroupTouched(this.userForm);
    console.log(this.userForm);
  }

  log1(test) {
    console.log(test);
  }

}
