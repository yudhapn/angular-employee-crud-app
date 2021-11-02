import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { GetUsersUseCase } from './domain/usecase/get-users-usecase';
import { GetUserByIdUseCase } from './domain/usecase/get-user-by-id-usecase copy';
import { CreateUserUseCase } from './domain/usecase/create-user-usecase';
import { UpdateUserUseCase } from './domain/usecase/update-user-usecase';
import { DeleteUserUseCase } from './domain/usecase/delete-user-usecase';
import { EmployeeRepositoryToken } from './domain/repository/employee-repository';
import { EmployeeRepositoryImpl } from './data/repository/employee-repository-impl';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './presentation/home/home.component';
import { HomeViewModel } from './presentation/home/home-view-model';
import { MatDialogModule } from '@angular/material/dialog';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    CoreModule,
  ],
  providers: [
    {
      provide: HomeViewModel,
      useClass: HomeViewModel,
    },
    {
      provide: GetUsersUseCase,
      useClass: GetUsersUseCase,
    },
    {
      provide: GetUserByIdUseCase,
      useClass: GetUserByIdUseCase,
    },
    {
      provide: CreateUserUseCase,
      useClass: CreateUserUseCase,
    },
    {
      provide: UpdateUserUseCase,
      useClass: UpdateUserUseCase,
    },
    {
      provide: DeleteUserUseCase,
      useClass: DeleteUserUseCase,
    },
    {
      provide: EmployeeRepositoryToken,
      useClass: EmployeeRepositoryImpl,
    },
  ],
})
export class HomeModule {}
