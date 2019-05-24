import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../shared/user.model';
import { AuthenticationService } from '../services/authentication.service';

// Custom validator to validate that password and confirm password fields match.
import { MustMatch } from '../services/must-match.validator';
import { first } from 'rxjs/operators';
import { map } from 'rxjs/operators';

// TEST
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public user: User;
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: AuthenticationService,
    private httpClient: HttpClient
  ) { }

  login() {
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
    // this.submitted = true;

    // // stop here if form is invalid
    // if (this.loginForm.invalid) {
    //   return;
    // }

    // // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value));
    // // console.log(this.user);

    // this.loginService.login(this.user)
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       // this.router.navigate([this.returnUrl]);
    //       console.log(data);
    //     },
    //     error => {
    //       // this.error = error;
    //       // this.loading = false;
    //       console.log(error);
    //     });


    // OK without auth:api middleware!
    this.httpClient.get('http://localhost:8000/api/oauth/token').subscribe((response: any[]) => {
      console.log(response);
      localStorage.setItem('token', JSON.stringify(response));
    });

  }

  onSubmitV2() {
    const headers = new HttpHeaders({
      Accept: 'application/json'
    });

    // Body only needed in PUT or PATCH requests.
    // const body = {
    //   name: 'dummy'
    // };

    console.log(this.user.email);
    console.log(this.user.password);

    const params = new HttpParams()
      .set('grant_type', 'password')
      .set('client_id', '1')
      .set('client_secret', 'GYzFaIDLNkkv4eoWW8W31AaX3s5PiTN3nzbUyuJn')
      .set('username', this.user.email)
      .set('password', this.user.password)
      .set('clscopeient_id', '*');

    const response = this.httpClient.get('http://localhost:8000/api/auth/token',
      {
        headers,
        // body,
        params
      });

    console.log(response);
  }

  goBack() {

  }
}
