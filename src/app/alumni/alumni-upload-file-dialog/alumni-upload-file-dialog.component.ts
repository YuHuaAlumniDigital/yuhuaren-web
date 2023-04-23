import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-alumni-upload-file-dialog',
  template: `
    <dialog-template [title]="'Upload Alumni'">
      <button mat-raised-button content color="primary" (click)="uploadFile()">
        Choose File
      </button>
      <input #fileUpload type="file">
    </dialog-template>
  `,
  styleUrls: ['./alumni-upload-file-dialog.component.scss']
})
export class AlumniUploadFileDialogComponent {

  @ViewChild('fileUpload')
  fileUpload?: ElementRef

  uploadFile() {
    if (this.fileUpload)
      this.fileUpload.nativeElement.click()
  }
}
