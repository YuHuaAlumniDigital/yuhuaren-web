import { Component } from '@angular/core';

@Component({
  selector: 'dialog-footer',
  template: `
      <div class="dialog-footer__container">
          <span class="spacer"></span>
          <button mat-raised-button color="primary">
              Ok
          </button>
      </div>
  `,
  styleUrls: ['./dialog-footer.component.scss']
})
export class DialogFooterComponent {

}
