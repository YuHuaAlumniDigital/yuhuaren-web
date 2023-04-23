import { Component } from '@angular/core';

@Component({
  selector: 'admin',
  template: `
    <dialog-template [title]="'Create New Admin'">
      <admin-form content></admin-form>
    </dialog-template>
  `,
  styleUrls: ['./admin-dialog.component.scss']
})
export class AdminDialogComponent {

}
