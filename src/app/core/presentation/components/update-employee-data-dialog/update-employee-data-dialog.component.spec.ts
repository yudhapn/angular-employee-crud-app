import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeDataDialogComponent } from './update-employee-data-dialog.component';

describe('UpdateEmployeeDataDialogComponent', () => {
  let component: UpdateEmployeeDataDialogComponent;
  let fixture: ComponentFixture<UpdateEmployeeDataDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmployeeDataDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployeeDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
