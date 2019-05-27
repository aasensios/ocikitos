import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
// import { MustMatch } from '../../services/must-match.validator';
import { User } from '../../models/user.model';
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

          // Debugging
          console.log(response['success']);
          console.log(localStorage.getItem('access_token'));
          console.log(this.user);
          console.log(this.message);
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

    // Debugging
    console.log(this.error);
  }

  ngOnInit() {
    this.user = new User();

    // this.loginForm = this.formBuilder.group({

    //   user: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required]],
    // confirmPassword: ['', Validators.required]
    // }, {
    //     validator: MustMatch('password', 'confirmPassword')
    // });
  }

  // Convenience getter for easy access to form fields
  // get f() { return this.loginForm.controls; }

  // registerForm: FormGroup;
  // submitted = false;
  // public user: User;


  // constructor(
  //   private formBuilder: FormBuilder,
  //   private loginService: LoginService
  //   ) { }

  // login() {
  //   /* const user = new User();
  //   user.email = this.user.email;
  //   user.password = this.user.password; */

  //   return this.loginService.login(this.user).subscribe(result => {
  //     if (result.error) {
  //       alert(result.message);
  //     } else if (result.access_token) {
  //       alert('Bienvenido');
  //       localStorage.setItem('token', JSON.stringify(result));
  //     }
  //   });
  // }


  // ngOnInit() {
  //   this.user = new User();

  //   this.registerForm = this.formBuilder.group({

  //     user: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required]],
  //     confirmPassword: ['', Validators.required] 
  //   }, {
  //       validator: MustMatch('password', 'confirmPassword') 
  //     });
  // }

  // // convenience getter for easy access to form fields
  // get f() { return this.registerForm.controls; }

  // onSubmit() {
  //   this.submitted = true;

  //   // stop here if form is invalid
  //   if (this.registerForm.invalid) {
  //     return;
  //   }

  //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  //   console.log(this.user);
  // }

  // goBack(){

  // }

}
