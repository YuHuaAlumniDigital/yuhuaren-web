import { Component } from '@angular/core';

@Component({
  selector: 'admin-form',
  template: `
      <form class="admin-form__container">
          <mat-form-field class="admin-form__input__2">
              <mat-label>Name</mat-label>
              <input matInput value="">
          </mat-form-field>
        <mat-form-field class="admin-form__input__2">
          <mat-label>Category</mat-label>
          <input matInput value="">
        </mat-form-field>
        <mat-form-field class="admin-form__input__2">
          <mat-label>Mobile. No</mat-label>
          <input matInput value="" type="tel">
        </mat-form-field>
          <mat-form-field class="admin-form__input__2">
              <mat-label>Email</mat-label>
              <input matInput value="" type="email">
          </mat-form-field>
      </form>`,
  styleUrls: ['./admin-form.component.scss']
})
export class AdminFormComponent {

}
