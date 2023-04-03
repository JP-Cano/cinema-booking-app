import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { KEY } from '../../../../domain/models/commons/enums/Key';
import { IBaseRepositoryAdapter } from '../../../../domain/models/gateways/base/IBaseRepositoryAdapter';
import { ShowtimeData, ShowtimeDocument } from '../data/showtimes/ShowtimeData';

export class ShowtimeRepositoryAdapter
  implements IBaseRepositoryAdapter<ShowtimeData, string>
{
  constructor(
    @InjectModel(KEY.SHOWTIME)
    private readonly showtimeDocument: Model<ShowtimeDocument>,
  ) {}

  public async create(data: ShowtimeData): Promise<ShowtimeData> {
    try {
      return await this.showtimeDocument.create(data);
    } catch (err) {
      throw new Error(err.message);
    }
  }

  public async findAll(): Promise<ShowtimeData[]> {
    try {
      return await this.showtimeDocument.find({}).select('-__v').exec();
    } catch (err) {
      throw new Error(err.message);
    }
  }

  public async findById(id: string): Promise<ShowtimeData> {
    try {
      return await this.showtimeDocument
        .findById(id)
        .populate({
          path: 'movies',
          select: '-__v -_id',
        })
        .exec();
    } catch (err) {
      throw new Error(err.message);
    }
  }

  public async updateById(
    id: string,
    data: Partial<ShowtimeData>,
  ): Promise<ShowtimeData> {
    try {
      return await this.showtimeDocument
        .findByIdAndUpdate(id, { $set: data })
        .exec();
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
