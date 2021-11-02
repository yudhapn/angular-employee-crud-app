import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../employee-data-dialog/employee-data-dialog.component';

@Component({
  selector: 'app-delete-employee-data-dialog',
  templateUrl: './delete-employee-data-dialog.component.html',
  styleUrls: ['./delete-employee-data-dialog.component.css'],
})
export class DeleteEmployeeDataDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteEmployeeDataDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  get deletedData() {
    return this.data.user.id;
  }
}
