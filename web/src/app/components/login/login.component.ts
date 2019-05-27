import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

// Custom validator to validate that password and confirm password fields match.
// import { MustMatch } from '../../services/must-match.validator';
// import { first } from 'rxjs/operators';
// import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public user: User;
  // loginForm: FormGroup;
  submitted = false;

  constructor(
    // private formBuilder: FormBuilder,
    private authService: AuthService,
  ) { }

  login() {
    this.authService.loginUser(this.user)
      .subscribe(
        response => {
          localStorage.access_token = response['access_token'];
          localStorage.refresh_token = response['refresh_token'];
        }
      );

    // Feedback to the user
    this.authService.getUser()
      .subscribe(
        response => {
          alert(`Welcome ${response.name}`);
        }
      );
  }

  ngOnInit() {
    this.user = new User();
  }

}
