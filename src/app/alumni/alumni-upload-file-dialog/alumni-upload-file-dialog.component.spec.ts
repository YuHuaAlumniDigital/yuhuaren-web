import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniUploadFileDialogComponent } from './alumni-upload-file-dialog.component';

describe('AlumniUploadFileDialogComponent', () => {
  let component: AlumniUploadFileDialogComponent;
  let fixture: ComponentFixture<AlumniUploadFileDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumniUploadFileDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumniUploadFileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
