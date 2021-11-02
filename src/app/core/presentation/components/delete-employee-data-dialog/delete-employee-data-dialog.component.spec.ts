import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmployeeDataDialogComponent } from './delete-employee-data-dialog.component';

describe('DeleteEmployeeDataDialogComponent', () => {
  let component: DeleteEmployeeDataDialogComponent;
  let fixture: ComponentFixture<DeleteEmployeeDataDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEmployeeDataDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEmployeeDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
