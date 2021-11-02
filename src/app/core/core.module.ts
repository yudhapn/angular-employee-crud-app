import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { EmployeeDataDialogComponent } from './presentation/components/employee-data-dialog/employee-data-dialog.component';
import { UpdateEmployeeDataDialogComponent } from './presentation/components/update-employee-data-dialog/update-employee-data-dialog.component';
import { DeleteEmployeeDataDialogComponent } from './presentation/components/delete-employee-data-dialog/delete-employee-data-dialog.component';

@NgModule({
  declarations: [
    EmployeeDataDialogComponent,
    UpdateEmployeeDataDialogComponent,
    DeleteEmployeeDataDialogComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
  ],
})
export class CoreModule {}
