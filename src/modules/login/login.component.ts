import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RegexValidatorsOptions } from './enums/regex-validators.enum';
import { LoginService } from './services/login.service';
import { LoginViewModel } from './models/user-login-data';
import { LoggerService } from '@services/logger.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit, OnDestroy {

  public loginForm: FormGroup;

  private componentSubscription: Subscription;

  constructor(private loginService: LoginService,
    private logger: LoggerService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.componentSubscription = new Subscription();
    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.pattern(new RegExp(RegexValidatorsOptions.EMAIL_REGEX))]],
        password: ['', [Validators.required, Validators.pattern(new RegExp(RegexValidatorsOptions.PASSWORD_REGEX))]],
        remember: [false]
      }
    );
  }

  ngOnDestroy() {
    this.componentSubscription.unsubscribe();
  }

  /** convenience getter for easy access to form fields */
  get f(): FormGroup["controls"] { return this.loginForm.controls; }

  public tryLogin() {
    const newUser = new LoginViewModel(this.loginForm.value['email'], this.loginForm.value['password']);
    this.loginService.tryToLogin(newUser).subscribe(response => {
      if (response) {
        this.logger.log("Success login for " + newUser.email);
      } else {
        this.logger.log("Login fail for user " + newUser.email);
      }
    });
  }
}
