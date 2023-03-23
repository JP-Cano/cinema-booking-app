import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { KEY } from '../../../../domain/models/commons/enums/Key';
import { IBaseRepositoryAdapter } from '../../../../domain/models/gateways/base/IBaseRepositoryAdapter';
import { User } from '../../../../domain/models/users/User';
import { UserDocument } from '../data/users/UserData';

export class UserRepositoryAdapter
  implements IBaseRepositoryAdapter<User, string>
{
  constructor(
    @InjectModel(KEY.USER)
    private readonly userDocument: Model<UserDocument>,
  ) {}

  public async create(data: User): Promise<User> {
    try {
      return await this.userDocument.create(data);
    } catch (e) {
      throw new Error(e);
    }
  }

  public deleteById(id: string): Promise<void> {
    return Promise.resolve(undefined);
  }

  public async findAll(): Promise<User[]> {
    try {
      return this.userDocument.find({}).select('-__v');
    } catch (e) {
      throw new Error(e);
    }
  }

  public findById(id: string): Promise<User> {
    return Promise.resolve(undefined);
  }

  public updateById(id: string, data: Partial<User>): Promise<User> {
    return Promise.resolve(undefined);
  }
}
