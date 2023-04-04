import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { KEY } from '../../../../domain/models/commons/enums/Key';
import { IBaseRepositoryAdapter } from '../../../../domain/models/gateways/base/IBaseRepositoryAdapter';
import { BookingData, BookingDocument } from '../data/bookings/BookingData';

export class BookingRepositoryAdapter
  implements IBaseRepositoryAdapter<BookingData, string>
{
  constructor(
    @InjectModel(KEY.BOOKING)
    private readonly bookingDocument: Model<BookingDocument>,
  ) {}

  public async create(data: BookingData): Promise<BookingData> {
    try {
      return await this.bookingDocument.create(data);
    } catch (err) {
      throw new Error(err.message);
    }
  }

  public async deleteById(id: string): Promise<void> {
    try {
      await this.bookingDocument.findByIdAndDelete(id).exec();
    } catch (err) {
      throw new Error(err.message);
    }
  }

  public async findAll(): Promise<BookingData[]> {
    try {
      return await this.bookingDocument.find({}).select('-__v').exec();
    } catch (err) {
      throw new Error(err.message);
    }
  }

  public async findById(id: string): Promise<BookingData> {
    try {
      return await this.bookingDocument
        .findById(id)
        .populate([
          { path: 'userId', select: '-__v -_id' },
          { path: 'showtimeId', select: '-__v -_id -movies' },
          { path: 'movies', select: '-__v -_id ' },
        ])
        .select('-__v')
        .exec();
    } catch (err) {
      throw new Error(err.message);
    }
  }

  public async findByUserId(userId: string): Promise<BookingData> {
    try {
      return this.bookingDocument
        .findOne({ userId })
        .populate([
          { path: 'userId', select: '-__v -_id' },
          { path: 'showtimeId', select: '-__v -_id -movies' },
          { path: 'movies', select: '-__v -_id ' },
        ])
        .select('-__v')
        .exec();
    } catch (err) {
      throw new Error(err.message);
    }
  }

  public async updateById(
    id: string,
    data: Partial<BookingData>,
  ): Promise<BookingData> {
    try {
      return await this.bookingDocument
        .findByIdAndUpdate(id, { $set: data }, { new: true })
        .exec();
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
