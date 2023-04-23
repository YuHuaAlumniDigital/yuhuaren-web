import { Component } from '@angular/core';

@Component({
  selector: 'change-password-form',
  template: `
    <mat-card class="">
      <mat-card-header>
        <mat-card-title>Change Password</mat-card-title>
      </mat-card-header>
      <form>
        <mat-form-field>
          <mat-label>Current password</mat-label>
          <input matInput>
        </mat-form-field>
        <mat-form-field>
          <mat-label>New password</mat-label>
          <input matInput>
        </mat-form-field>
        <mat-form-field>
          <mat-label>Confirmed password</mat-label>
          <input matInput>
        </mat-form-field>
        <button mat-button color="primary" type="button">
          Discard
        </button>
        <button mat-raised-button color="primary" type="submit">
          Change Password
        </button>
      </form>
    </mat-card>
  `,
  styleUrls: ['./change-password-form.component.scss']
})
export class ChangePasswordFormComponent {

}
