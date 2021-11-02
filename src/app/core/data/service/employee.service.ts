import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  baseUrl: string = 'http://localhost:4000';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    let api = `${this.baseUrl}/users`;
    return this.http.get<User[]>(api).pipe(catchError(this.handleError));
  }

  getUserById(id: number): Observable<any> {
    let api = `${this.baseUrl}/users/${id}`;
    return this.http.get<User>(api).pipe(catchError(this.handleError));
  }

  createUser(user: any): Observable<any> {
    let api = `${this.baseUrl}/users`;
    return this.http.post(api, user).pipe(catchError(this.handleError));
  }

  updateUser(user: User): Observable<any> {
    let api = `${this.baseUrl}/users/${user.id}`;
    return this.http.put(api, user).pipe(catchError(this.handleError));
  }

  deleteUser(id: number): Observable<any> {
    let api = `${this.baseUrl}/users/${id}`;
    return this.http.delete(api).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      msg = error.error.message;
    } else {
      msg = `Error Code: ${error.status} \n Message; ${error.message}`;
    }
    return throwError(msg);
  }
}
