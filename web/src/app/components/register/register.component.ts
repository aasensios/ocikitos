import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
// import { MustMatch } from '../../services/must-match.validator';
import { User } from '../../models/user.model';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: User;
  // loginForm: FormGroup;
  submitted = false;

  constructor(
    // private formBuilder: FormBuilder,
    private authService: AuthService,
  ) { }

  register() {
    this.authService.registerUser(this.user)
    .subscribe(
      response => {
        const success = response['success'];
        localStorage['access_token'] = response['data']['token'];
        localStorage['username'] = response['data']['name'];
        const message = response['message'];

        // Debugging
        console.log(success);
        console.log(localStorage['access_token']);
        console.log(localStorage['username']);
        console.log(message);
      }
    );
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