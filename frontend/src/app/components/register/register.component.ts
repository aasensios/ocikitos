import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
// import { MustMatch } from 'src/app/services/must-match.validator';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {

  public user: User;
  // loginForm: FormGroup;
  submitted = false;
  error: string;
  message: string;

  constructor(
    // private formBuilder: FormBuilder,
    private authService: AuthService,
  ) { }

  /**
   * Log in an existing user, storing the access token and the refresh token
   * from the API response in web browser's local storage.
   */
  register() {
    this.authService.registerUser(this.user)
      .subscribe(
        // Success
        response => {
          // Storing the token
          localStorage.setItem('access_token', response['data'].token);
          this.user.name = response['data'].name;
          this.message = response['message'];
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
        }
      );
  }

  ngOnInit() {
    this.user = new User();
  }

}
