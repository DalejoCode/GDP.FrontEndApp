import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegexValidatorsOptions } from '../enums/regex-validators.enum';
import { MustMatch } from '../helpers/must-match.helper';
import { LoggerService } from '@services/logger.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm : FormGroup;

  constructor(private formBuilder: FormBuilder, private logger: LoggerService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(new RegExp(RegexValidatorsOptions.EMAIL_REGEX))]],
      password: ['', [Validators.required, Validators.pattern(new RegExp(RegexValidatorsOptions.PASSWORD_REGEX))]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    })
  }

  /** convenience getter for easy access to form fields */
  get f(): FormGroup["controls"] { return this.registerForm.controls; }

  public registerUser(): void {
    this.logger.info('SUCCESS!!', JSON.stringify(this.registerForm.value));
  }

}
