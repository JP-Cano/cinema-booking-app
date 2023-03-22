import { Inject, Injectable } from '@nestjs/common';
import { KEY } from '../../models/commons/enums/Key';
import { IBaseRepositoryAdapter } from '../../models/gateways/base/IBaseRepositoryAdapter';
import { User } from '../../models/users/User';
import { IBaseUseCase } from '../interfaces/base/IBaseUseCase';

@Injectable()
export class UserUseCase implements IBaseUseCase<User, string> {
  constructor(
    @Inject(KEY.DATABASE_REPOSITORY)
    private readonly userRepository: IBaseRepositoryAdapter<User, string>,
  ) {}

  public async create(data: User): Promise<User> {
    try {
      return await this.userRepository.create(data);
    } catch (err) {
      throw new Error(err);
    }
  }

  public deleteById(id: string): Promise<void> {
    return Promise.resolve(undefined);
  }

  public async findAll(): Promise<User[]> {
    try {
      return await this.userRepository.findAll();
    } catch (err) {
      throw new Error(err);
    }
  }

  public findById(id: string): Promise<User> {
    return Promise.resolve(undefined);
  }

  public updateById(id: string, data: Partial<User>): Promise<User> {
    return Promise.resolve(undefined);
  }
}
