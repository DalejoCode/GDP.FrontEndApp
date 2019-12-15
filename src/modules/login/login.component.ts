import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RegexValidatorsOptions } from './enums/regex-validators.enum';
import { LoginService } from './services/login.service';
import { LoginViewModel } from './models/user-login-data';
import { LoggerService } from '@services/logger.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RedirectService } from '@services/redirect.service';

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
    private formBuilder: FormBuilder,
    private redirectService: RedirectService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.buildForms();
    this.doSubscriptions();
  }

  ngOnDestroy() {
    this.componentSubscription.unsubscribe();
  }

  /** convenience getter for easy access to form fields */
  get f(): FormGroup["controls"] { return this.loginForm.controls; }

  private buildForms(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.pattern(new RegExp(RegexValidatorsOptions.EMAIL_REGEX))]],
        password: ['', [Validators.required, Validators.pattern(new RegExp(RegexValidatorsOptions.PASSWORD_REGEX))]],
        remember: [false]
      }
    );
  }

  private doSubscriptions(): void {
    this.componentSubscription = new Subscription();
    this.componentSubscription.add(this.loginService.getUserLoginRx().subscribe(response => {
      if(response && response.success){
        this.redirectService.redirectToHomePage();
      } else if(response && !response.success){
        this._snackBar.open(response.message, 'Aceptar', {
          duration: 2000,
        });
      }
    }));
  }

  public tryLogin() {
    this.loginService.tryToLogin(
      new LoginViewModel(
        this.loginForm.value['password'],
        this.loginForm.value['email']
      ));
  }
}
