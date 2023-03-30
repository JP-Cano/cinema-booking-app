import { Inject, Injectable } from '@nestjs/common';
import { KEY } from '../../models/commons/enums/Key';
import { IBaseRepositoryAdapter } from '../../models/gateways/base/IBaseRepositoryAdapter';
import { Movie } from '../../models/movies/Movie';
import { IBaseUseCase } from '../interfaces/base/IBaseUseCase';

@Injectable()
export class MoviesUseCase implements IBaseUseCase<Movie, string> {
  constructor(
    @Inject(KEY.MOVIE_REPOSITORY)
    private readonly movieRepository: IBaseRepositoryAdapter<Movie, string>,
  ) {}

  public async create(data: Movie): Promise<Movie> {
    try {
      return await this.movieRepository.create(data);
    } catch (err) {
      throw new Error(err);
    }
  }

  public async deleteById(id: string): Promise<void> {
    try {
      const movie = await this.findById(id);
      await this.movieRepository.deleteById(movie.id);
    } catch (err) {
      throw new Error(err);
    }
  }

  public async findAll(): Promise<Movie[]> {
    try {
      return await this.movieRepository.findAll();
    } catch (err) {
      throw new Error(err);
    }
  }

  public async findById(id: string): Promise<Movie> {
    const movie = await this.movieRepository.findById(id);
    if (movie === null) {
      throw new Error('Movie not found');
    }
    return movie;
  }

  public async updateById(id: string, data: Movie): Promise<Movie> {
    const movie = await this.findById(id);
    return this.movieRepository.updateById(movie.id, data);
  }
}
