import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any = {
    firstName: 'huy 1',
    lastName: 'truong ',
    userName: 'huy1',
    password: '123456',
  }
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  checkUserValidate() {
    return this.user.firstName && this.user.lastName && this.user.userName && this.user.password;
  }

  register(){
    if(!this.checkUserValidate()) {
      alert('Invalid user data');
      return;
    }

    const registerUserObs = this.userService.register(this.user);
    registerUserObs.subscribe((data) => {
      console.log(data);
      alert('Register successfully');
    });
  }

}
