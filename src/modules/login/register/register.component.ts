import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegexValidatorsOptions } from '../enums/regex-validators.enum';
import { MustMatch } from '../helpers/must-match.helper';
import { LoggerService } from '@services/logger.service';
import { MatAccordion, MatExpansionPanel } from '@angular/material';
import { User } from '../models/user.model';
import { UserTypeEnum } from '../models/enums/user-type.enum';
import { Subscription } from 'rxjs';
import { LoginService } from '../services/login.service';
import { RedirectService } from '@services/redirect.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  public panelRegisterState: boolean;
  public panelContactState: boolean;
  public registerForm: FormGroup;
  public contactForm: FormGroup;

  public componentSubscriptions: Subscription;

  constructor(private formBuilder: FormBuilder,
    private logger: LoggerService,
    private loginService: LoginService,
    private redirectService: RedirectService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.panelRegisterState = true;
    this.panelContactState = false;
    this.buildForms();
    this.doSubscriptions();
  }

  /** convenience getter for easy access to form fields */
  get f(): FormGroup["controls"] { return this.registerForm.controls; }
  get fc(): FormGroup["controls"] { return this.contactForm.controls; }

  public registerUser(): void {
    const userToAdd = new User(this.registerForm.value['firstName'],
      this.registerForm.value['lastName'],
      this.registerForm.value['password'],
      UserTypeEnum.Client,
      this.contactForm.value['city'],
      this.contactForm.value['phone'],
      this.contactForm.value['email']
    );

    this.loginService.registerNewUser(userToAdd);
  }

  public submitFirstStep(): void {
    this.panelRegisterState = false;
    this.panelContactState = true;
  }

  private buildForms(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern(new RegExp(RegexValidatorsOptions.PASSWORD_REGEX))]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });

    this.contactForm = this.formBuilder.group({
      city: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(new RegExp(RegexValidatorsOptions.EMAIL_REGEX))]]
    });
  }

  private doSubscriptions(): void {
    this.componentSubscriptions = new Subscription();
    this.componentSubscriptions.add(this.loginService.getUserRegisterRx().subscribe(response => {
      if(response && response.success){
        this.redirectService.redirectToHomePage();
      } else if(response && !response.success){
        this._snackBar.open(response.message, 'Aceptar', {
          duration: 2000,
        });
      }
    }));
  }

  ngOnDestroy() {
    this.componentSubscriptions.unsubscribe();
  }
}
