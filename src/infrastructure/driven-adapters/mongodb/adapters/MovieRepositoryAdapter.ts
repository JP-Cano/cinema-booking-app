import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { KEY } from '../../../../domain/models/commons/enums/Key';
import { IBaseRepositoryAdapter } from '../../../../domain/models/gateways/base/IBaseRepositoryAdapter';
import { Movie } from '../../../../domain/models/movies/Movie';
import { MovieDocument } from '../data/movies/MovieData';

export class MovieRepositoryAdapter
  implements IBaseRepositoryAdapter<Movie, string>
{
  constructor(
    @InjectModel(KEY.MOVIE)
    private readonly movieDocument: Model<MovieDocument>,
  ) {}

  public async create(data: Movie): Promise<Movie> {
    try {
      return await this.movieDocument.create(data);
    } catch (err) {
      throw new Error(err);
    }
  }

  public async deleteById(id: string): Promise<void> {
    try {
      await this.movieDocument.findByIdAndDelete(id).exec();
    } catch (err) {
      throw new Error(err);
    }
  }

  public async findAll(): Promise<Movie[]> {
    try {
      return await this.movieDocument.find({}).select('-__v').exec();
    } catch (err) {
      throw new Error(err);
    }
  }

  public async findById(id: string): Promise<Movie> {
    try {
      return this.movieDocument.findById(id).select('-__v').exec();
    } catch (err) {
      throw new Error(err);
    }
  }

  public async updateById(id: string, data: Partial<Movie>): Promise<Movie> {
    try {
      return await this.movieDocument
        .findByIdAndUpdate(id, { $set: data }, { new: true })
        .exec();
    } catch (err) {
      throw new Error(err);
    }
  }
}
