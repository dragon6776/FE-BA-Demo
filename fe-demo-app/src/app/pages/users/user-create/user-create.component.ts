import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { matchValueValidator, matchOtherValidator } from 'src/app/_components/match-value-validator';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['',
        [Validators.required, Validators.minLength(6), Validators.maxLength(12), Validators.email, matchOtherValidator('password')
      ]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    console.log(this.userForm);
  }

  log1(test) {
    console.log(test);
  }

}
