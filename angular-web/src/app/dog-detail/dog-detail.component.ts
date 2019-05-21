import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../services/must-match.validator';
import { Dog } from '../shared/dog.model';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.css']
})

export class DogDetailComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  dog: Dog;
  dogs: Dog[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dog = new Dog(0, "", "", "", 0, 0, "", "","", "", "", "");
    this.registerForm = this.formBuilder.group({
      chip: ['', [Validators.required, Validators.minLength(15),Validators.maxLength(15)]],
      name: ['', Validators.required],
      gender: ['',null],
      breed: ['',null],
      color: ['',null],
      birthdate: ['',null],
      deathdate: ['',null],
      owner_dni: ['', Validators.required],
      owner_fullname: ['', Validators.required],
      owner_email: ['', [Validators.required, Validators.email]],
      residence: ['', null]

     /*  password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required] 
    }, {
        validator: MustMatch('password', 'confirmPassword') */
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.dog);

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
}