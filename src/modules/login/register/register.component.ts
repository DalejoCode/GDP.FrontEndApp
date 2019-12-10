import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegexValidatorsOptions } from '../enums/regex-validators.enum';
import { MustMatch } from '../helpers/must-match.helper';
import { LoggerService } from '@services/logger.service';
import { MatAccordion, MatExpansionPanel } from '@angular/material';
import { User, UserContact } from '../models/user.model';
import { UserTypeEnum } from '../models/enums/user-type.enum';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public panelRegisterState: boolean;
  public panelContactState: boolean;
  public registerForm: FormGroup;
  public contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private logger: LoggerService) { }

  ngOnInit() {
    this.panelRegisterState = true;
    this.panelContactState = false;

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

  /** convenience getter for easy access to form fields */
  get f(): FormGroup["controls"] { return this.registerForm.controls; }
  get fc(): FormGroup["controls"] { return this.contactForm.controls; }

  public registerUser(): void {
    const userToAdd = new User(this.registerForm.value['firstName'],
      this.registerForm.value['lastName'],
      this.registerForm.value['password'],
      UserTypeEnum.Client,
      new UserContact(this.contactForm.value['city'],
        this.contactForm.value['phone'],
        this.contactForm.value['email'])
    );

    this.logger.info("New User -->", userToAdd);
  }

  public submitFirstStep(): void {
    this.panelRegisterState = false;
    this.panelContactState = true;
  }

}
