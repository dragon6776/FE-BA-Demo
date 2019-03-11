import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { AlertService } from 'src/app/_services/alert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  subscription: Subscription;
  user: any = {
    firstName: 'huy 1',
    lastName: 'truong ',
    username: 'huy1',
    password: '123456',
  };

  constructor(private userService: UserService, private alertService: AlertService) { }

  ngOnInit() {
  }

  checkUserValidate() {
    return this.user.firstName && this.user.lastName && this.user.username && this.user.password;
  }

  register() {
    if (!this.checkUserValidate()) {
      alert('Invalid user data');
      return;
    }

    const registerUserObs = this.userService.register(this.user);
    this.subscription = registerUserObs.subscribe((data: any) => {
      console.log(data);
      this.alertService.success('Register successfully.');
    }, (errRes) => {
      console.log(errRes);
      this.alertService.error(errRes.error.message);
    });
  }

}
