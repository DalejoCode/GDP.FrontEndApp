import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegexValidatorsOptions } from './enums/regex-validators.enum';
import { LoginService } from './services/login.service';
import { LoginViewModel } from './models/user-login-data';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit, OnDestroy {

  public loginForm = new FormGroup({
    email: new FormControl('',
      [Validators.required, Validators.pattern(new RegExp(RegexValidatorsOptions.EMAIL_REGEX))]),
    password: new FormControl('',
      [Validators.required, Validators.pattern(new RegExp(RegexValidatorsOptions.PASSWORD_REGEX))]),
    remember: new FormControl('')
  });

  private componentSubscription: Subscription;


  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.componentSubscription = new Subscription();
  }

  ngOnDestroy() {
    this.componentSubscription.unsubscribe();
  }

  public tryLogin() {
    console.warn(this.loginForm.value);
    /**
     * Use this lines when web Api is Up
     *
      const newUser = new LoginViewModel(this.loginForm.value['email'],  this.loginForm.value['password']);
      this.loginService.tryToLogin(newUser).subscribe(response => {
        if(response) {
          // Do Something
        } else {
          // Do Something else
        }
      });
    */
  }
}
