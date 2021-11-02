import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/model/user';

export interface EmployeeRepository {
  getUsers(): Observable<any>;
  getUserById(id: number): Observable<any>;
  createUser(user: any): Observable<any>;
  updateUser(user: User): Observable<any>;
  deleteUser(id: number): Observable<any>;
}

export const EmployeeRepositoryToken = new InjectionToken<EmployeeRepository>(
  'EmployeeRepositoryToken'
);
