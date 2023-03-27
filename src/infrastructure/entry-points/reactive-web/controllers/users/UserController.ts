import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from '../../../../../domain/models/users/User';
import { UserUseCase } from '../../../../../domain/usecases/users/UserUseCase';
import { UserDto } from '../../dto/user/UserDto';

@ApiTags('Users')
@Controller({ path: 'api/users' })
export class UserController {
  constructor(private readonly userUserCase: UserUseCase) {}

  @Post()
  public async create(@Body() data: UserDto): Promise<User> {
    try {
      return await this.userUserCase.create(data);
    } catch (e) {
      return e.message;
    }
  }

  @Get()
  public async getAll(): Promise<User[]> {
    try {
      return await this.userUserCase.findAll();
    } catch (e) {
      return e.message;
    }
  }

  @Get(':id')
  public async getById(@Param('id') id: string): Promise<User> {
    try {
      return await this.userUserCase.findById(id);
    } catch (e) {
      throw new NotFoundException(e.message);
    }
  }

  @Delete(':id')
  public async deleteById(@Param('id') id: string): Promise<string> {
    try {
      await this.userUserCase.deleteById(id);
      return 'User deleted successfully';
    } catch (e) {
      throw new NotFoundException(e.message);
    }
  }
}
