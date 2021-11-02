import { Injectable } from '@angular/core';
import { User } from 'src/app/core/model/user';
import { CreateUserUseCase } from '../../domain/usecase/create-user-usecase';
import { DeleteUserUseCase } from '../../domain/usecase/delete-user-usecase';
import { GetUserByIdUseCase } from '../../domain/usecase/get-user-by-id-usecase copy';
import { GetUsersUseCase } from '../../domain/usecase/get-users-usecase';
import { UpdateUserUseCase } from '../../domain/usecase/update-user-usecase';

@Injectable()
export class HomeViewModel {
  constructor(
    private getUsersUseCase: GetUsersUseCase,
    private getUserByIdUseCase: GetUserByIdUseCase,
    private createUserUseCase: CreateUserUseCase,
    private updateUserUseCase: UpdateUserUseCase,
    private deleteUserUseCase: DeleteUserUseCase
  ) {}

  getUsers() {
    return this.getUsersUseCase.execute();
  }

  getUserById(id: number) {
    return this.getUserByIdUseCase.execute(id);
  }

  createUser(user: any) {
    return this.createUserUseCase.execute(user);
  }

  updateUser(user: User) {
    return this.updateUserUseCase.execute(user);
  }
  deleteUser(id: number) {
    return this.deleteUserUseCase.execute(id);
  }
}
