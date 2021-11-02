import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../employee-data-dialog/employee-data-dialog.component';

@Component({
  selector: 'app-update-employee-data-dialog',
  templateUrl: './update-employee-data-dialog.component.html',
  styleUrls: ['./update-employee-data-dialog.component.css'],
})
export class UpdateEmployeeDataDialogComponent {
  roles = ['Admin', 'User'];
  constructor(
    public dialogRef: MatDialogRef<UpdateEmployeeDataDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  inputEmployeeData = new FormGroup({
    title: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl('', [Validators.required]),
  });

  get title() {
    return this.inputEmployeeData.get('title');
  }

  get firstName() {
    return this.inputEmployeeData.get('firstName');
  }

  get lastName() {
    return this.inputEmployeeData.get('lastName');
  }

  get email() {
    return this.inputEmployeeData.get('email');
  }

  get role() {
    return this.inputEmployeeData.get('role');
  }

  get updatedData() {
    return {
      ...this.inputEmployeeData.value,
      id: this.data.user.id,
    };
  }

  get isAbleSubmit() {
    return this.inputEmployeeData.invalid;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
