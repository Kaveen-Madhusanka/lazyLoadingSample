import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loginForm =  new FormGroup({
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }
  onClear() {
    this.loginForm.reset();
  }

  submitForm() {
    const user = this.loginForm.value;
      if (user.email == 'kaveen' && user.password == '123'){
        this.router.navigate(['mainMenu'])
      }

  }
}
