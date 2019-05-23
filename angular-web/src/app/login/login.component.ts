import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../services/must-match.validator';
//model
import { User } from '../shared/user.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  public user: User;
  

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
    ) { }

  login() {
    /* const user = new User();
    user.email = this.user.email;
    user.password = this.user.password; */

    return this.loginService.login(this.user).subscribe(result => {
      if (result.error) {
        alert(result.message);
      } else if (result.access_token) {
        alert('Bienvenido');
        localStorage.setItem('token', JSON.stringify(result));
      }
    });
  }


  ngOnInit() {
    this.user = new User();

    this.loginForm = this.formBuilder.group({
      
      user: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      /*confirmPassword: ['', Validators.required] 
    }, {
        validator: MustMatch('password', 'confirmPassword') */
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
    console.log(this.user);
  }

  goBack(){

  }
}
