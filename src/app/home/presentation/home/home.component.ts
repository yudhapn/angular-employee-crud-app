import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/model/user';
import { HomeViewModel } from './home-view-model';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeDataDialogComponent } from 'src/app/core/presentation/components/employee-data-dialog/employee-data-dialog.component';
import { UpdateEmployeeDataDialogComponent } from 'src/app/core/presentation/components/update-employee-data-dialog/update-employee-data-dialog.component';
import { DeleteEmployeeDataDialogComponent } from 'src/app/core/presentation/components/delete-employee-data-dialog/delete-employee-data-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'title',
    'firstName',
    'lastName',
    'email',
    'role',
    'action',
  ];
  usersData: User[] = [];

  constructor(private viewModel: HomeViewModel, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.viewModel.getUsers().subscribe((res) => {
      if (res) {
        this.usersData = res;
      }
    });
  }

  private addUser(result: any) {
    this.viewModel.createUser(result).subscribe((res) => {
      if (res) {
        this.getUsers();
      }
    });
  }

  private editUser(result: any) {
    this.viewModel.updateUser(result).subscribe((res) => {
      if (res) {
        this.getUsers();
      }
    });
  }

  private deleteUser(id: number) {
    this.viewModel.deleteUser(id).subscribe((res) => {
      if (res) {
        this.getUsers();
      }
    });
  }

  openAddEmployeeDialog() {
    const dialogRef = this.dialog.open(EmployeeDataDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        result.confirmPassword = result.password;
        console.log(result);
        this.addUser(result);
      }
    });
  }

  openUpdateEmployeeDialog(user: User) {
    const dialogRef = this.dialog.open(UpdateEmployeeDataDialogComponent, {
      data: {
        user: user,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);
        this.editUser(result);
      }
    });
  }

  openDeleteEmployeeDialog(user: User) {
    const dialogRef = this.dialog.open(DeleteEmployeeDataDialogComponent, {
      data: {
        user: user,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);
        this.deleteUser(result);
      }
    });
  }
}
