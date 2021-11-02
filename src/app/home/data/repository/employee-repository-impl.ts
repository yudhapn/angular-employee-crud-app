import { EmployeeRepository } from '../../domain/repository/employee-repository';
import { User } from 'src/app/core/model/user';
import { Injectable } from '@angular/core';
import { EmployeeService } from 'src/app/core/data/service/employee.service';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeRepositoryImpl implements EmployeeRepository {
  constructor(private employeeService: EmployeeService) {}

  getUsers(): Observable<any> {
    return this.employeeService.getUsers();
  }

  getUserById(id: number): Observable<any> {
    return this.employeeService.getUserById(id);
  }

  createUser(user: any): Observable<any> {
    return this.employeeService.createUser(user);
  }

  updateUser(user: User): Observable<any> {
    return this.employeeService.updateUser(user);
  }

  deleteUser(id: number): Observable<any> {
    return this.employeeService.deleteUser(id);
  }
}
