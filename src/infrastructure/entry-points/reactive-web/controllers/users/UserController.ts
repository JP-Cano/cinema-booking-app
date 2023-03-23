import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from '../../../../../domain/models/users/User';
import { UserUseCase } from '../../../../../domain/usecases/users/UserUseCase';

@ApiTags('Users')
@Controller({ path: 'api/users' })
export class UserController {
  constructor(private readonly userUserCase: UserUseCase) {}

  @Post()
  public async create(@Body() data: User): Promise<User> {
    try {
      return await this.userUserCase.create(data);
    } catch (e) {
      throw new Error(e);
    }
  }

  @Get()
  public async getAll(): Promise<User[]> {
    try {
      return await this.userUserCase.findAll();
    } catch (e) {
      throw new Error(e);
    }
  }
}
