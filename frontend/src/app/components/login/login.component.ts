import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/User';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide = true;
  submitted = false;
  public user: User;
  SNACKBAR_DURATION_IN_MILISECONDS = 5000;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.user = new User();
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  /**
   * Convenience getter for easy access to form fields
   */
  get f() { return this.loginForm.controls; }

  /**
   * Click on the main submit button.
   */
  onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid.
    if (this.loginForm.invalid) {
      this.openSnackBar('Check validation errors', 'UNDERSTOOD');
      return;
    }

    this.login();
  }

  /**
   * Log in an existing user, storing the access token and the refresh token
   * from the API response in web browser's local storage.
   */
  login() {
    this.user = this.loginForm.value;
    this.authService.getToken(this.user)
      .subscribe(
        // Success
        response => {
          localStorage.setItem('access_token', response.access_token);
          localStorage.setItem('refresh_token', response.refresh_token);
        },

        // Error handling
        error => console.log(error),

        // Complete
        () => {
          // Feedback to the user -- TODO: redirect to the home page
          this.authService.getUser()
            .subscribe(
              response => {
                this.openSnackBar(`${response.name}, welcome to Ocikitos!`, 'THANKS');
              }
            );
        }
      );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: this.SNACKBAR_DURATION_IN_MILISECONDS,
    });
  }

}
