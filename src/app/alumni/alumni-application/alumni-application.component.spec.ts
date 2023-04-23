import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniApplicationComponent } from './alumni-application.component';

describe('AlumniApplicationComponent', () => {
  let component: AlumniApplicationComponent;
  let fixture: ComponentFixture<AlumniApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumniApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumniApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
