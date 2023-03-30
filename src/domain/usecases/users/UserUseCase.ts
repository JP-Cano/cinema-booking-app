import { Inject, Injectable } from '@nestjs/common';
import { KEY } from '../../models/commons/enums/Key';
import { IBaseRepositoryAdapter } from '../../models/gateways/base/IBaseRepositoryAdapter';
import { User } from '../../models/users/User';
import { IBaseUseCase } from '../interfaces/base/IBaseUseCase';

@Injectable()
export class UserUseCase implements IBaseUseCase<User, string> {
  constructor(
    @Inject(KEY.USER_REPOSITORY)
    private readonly userRepository: IBaseRepositoryAdapter<User, string>,
  ) {}

  public async create(data: User): Promise<User> {
    try {
      return await this.userRepository.create(data);
    } catch (err) {
      throw new Error(err);
    }
  }

  public async deleteById(id: string): Promise<void> {
    try {
      const user = await this.findById(id);
      await this.userRepository.deleteById(user.id);
    } catch (err) {
      throw new Error(err);
    }
  }

  public async findAll(): Promise<User[]> {
    try {
      return await this.userRepository.findAll();
    } catch (err) {
      throw new Error(err);
    }
  }

  public async findById(id: string): Promise<User> {
    const user = await this.userRepository.findById(id);
    if (user === null) {
      throw new Error('User not found');
    }
    return user;
  }
}
