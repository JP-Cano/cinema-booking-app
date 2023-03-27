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

  public async deleteById(id: string): Promise<void> {
    try {
      await this.userDocument.findByIdAndDelete(id);
    } catch (e) {
      throw new Error(e);
    }
  }

  public async findAll(): Promise<User[]> {
    try {
      return this.userDocument.find({}).select('-__v');
    } catch (e) {
      throw new Error(e);
    }
  }

  public async findById(id: string): Promise<User> {
    try {
      return await this.userDocument.findById(id).select('-__v').exec();
    } catch (e) {
      throw new Error(e);
    }
  }
}
