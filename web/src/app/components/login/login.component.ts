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
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})

export class LoginComponent implements OnInit {

  public user: User;
  // loginForm: FormGroup;
  submitted = false;
  private error = '';

  constructor(
    // private formBuilder: FormBuilder,
    private authService: AuthService,
  ) { }

  /**
   * Log in an existing user, storing the access token and the refresh token
   * from the API response in web browser's local storage.
   */
  login() {
    this.authService.getToken(this.user)
      .subscribe(
        // Success
        response => {
          // console.log(response); // Debugging
          localStorage.setItem('access_token', response.access_token);
          localStorage.setItem('refresh_token', response.refresh_token);
        },

        // Error handling
        error => this.error = error,

        // Complete
        () => {
          // Feedback to the user -- TODO: redirect to the home page
          this.authService.getUser()
            .subscribe(
              response => {
                alert(`Welcome ${response.name}`);
              }
            );

          // Error showing (debugging)
          console.log(this.error);
        }
      );
  }

  ngOnInit() {
    this.user = new User();
  }

}
