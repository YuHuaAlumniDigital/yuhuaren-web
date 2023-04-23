import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'login-form',
  template: `
      <div class="login-form">
          <img>
          <form class="container" [formGroup]="form" (ngSubmit)="onSubmit()">
              <mat-form-field class="login-form__input">
                  <mat-label>Email</mat-label>
                  <input matInput placeholder="xxx@xxx.com" value="" type='email' formControlName="email">
                  <mat-icon matPrefix fontIcon="person"></mat-icon>
                  <mat-error *ngIf="emailInvalid">Invalid email format</mat-error>
                  <mat-error *ngIf="emailEmpty">Must enter an email</mat-error>
              </mat-form-field>
              <mat-form-field class="login-form__input">
                  <mat-label>Password</mat-label>
                  <input matInput placeholder="Must have at least 6 characters" value="" type='password'
                         formControlName="password">
                  <mat-icon matPrefix fontIcon="lock"></mat-icon>
                  <mat-error *ngIf="passwordEmpty">Password cannot be empty</mat-error>
                  <mat-error *ngIf="passwordInvalid">Password must cont</mat-error>
              </mat-form-field>
              <button mat-raised-button color="primary" type="submit">
                  Login
              </button>
          </form>
      </div>
  `,
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  form = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required,
      // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+,\\-./:;<=>?@[\\\\\\]^_`{|}~])(?=.*[^\\s]).{6,}$'),
      Validators.minLength(6),
    ]]
  })

  constructor(
    private fb: FormBuilder
  ) {}

  get emailInvalid() {
    const control = this.form.get('email')!;
    return control.hasError('email') && control.touched;
  }

  get emailEmpty() {
    const control = this.form.get('email')!;
    return control.hasError('required') && control.touched;
  }

  get passwordEmpty() {
    const control = this.form.get('password')!;
    return control.hasError('required') && control.touched;
  }

  get passwordInvalid() {
    const control = this.form.get('password')!;
    return control.hasError('minLength') && control.touched;
  }

  onSubmit() {
    this.form.markAllAsTouched();
  }
}
