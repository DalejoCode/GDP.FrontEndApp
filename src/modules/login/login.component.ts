import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegexValidatorsOptions } from './enums/regex-validators.enum';

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


  constructor() { }

  ngOnInit() {
    this.componentSubscription = new Subscription();
  }

  ngOnDestroy() {
    this.componentSubscription.unsubscribe();
  }

  public tryLogin(){
    console.warn(this.loginForm.value);
  }
}
