import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/core/model/user';

export interface DialogData {
  user: User;
}

@Component({
  selector: 'app-employee-data-dialog',
  templateUrl: './employee-data-dialog.component.html',
  styleUrls: ['./employee-data-dialog.component.css'],
})
export class EmployeeDataDialogComponent {
  roles = ['Admin', 'User'];
  data = {
    ...({} as User),
    password: '',
  };

  constructor(public dialogRef: MatDialogRef<EmployeeDataDialogComponent>) {}

  inputEmployeeData = new FormGroup({
    title: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
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

  get password() {
    return this.inputEmployeeData.get('password');
  }

  get isAbleSubmit() {
    return this.inputEmployeeData.invalid;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
