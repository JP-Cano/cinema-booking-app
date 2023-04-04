import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { pipe } from 'fp-ts/function';
import * as O from 'fp-ts/Option';
import { KEY } from '../../models/commons/enums/Key';
import { IBaseRepositoryAdapter } from '../../models/gateways/base/IBaseRepositoryAdapter';
import { Movie } from '../../models/movies/Movie';
import { BookingUseCase } from '../bookings/BookingUseCase';
import { IBaseUseCase } from '../interfaces/base/IBaseUseCase';
import { ShowtimeUseCase } from '../showtimes/ShowtimeUseCase';

@Injectable()
export class MoviesUseCase implements IBaseUseCase<Movie, string> {
  constructor(
    @Inject(KEY.MOVIE_REPOSITORY)
    private readonly movieRepository: IBaseRepositoryAdapter<Movie, string>,
    private readonly showtimeUseCase: ShowtimeUseCase,
    private readonly bookingUseCase: BookingUseCase,
  ) {}

  public async create(data: Movie): Promise<Movie> {
    try {
      return await this.movieRepository.create(data);
    } catch (err) {
      throw new Error(err);
    }
  }

  public async deleteById(id: string): Promise<void> {
    const movie = await this.findById(id);
    const { showtimeMovies, bookingMovies } =
      await this.checkMovieHasShowtimeOrBooking(movie);

    if (showtimeMovies || bookingMovies) {
      throw new UnauthorizedException('Cannot delete this movie');
    }
    await this.movieRepository.deleteById(movie.id);
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

  private async checkMovieHasShowtimeOrBooking(
    movie: Movie,
  ): Promise<{ showtimeMovies: boolean; bookingMovies: boolean }> {
    const showtimeMovies = await this.checkMoviesInSource(
      movie,
      this.showtimeUseCase,
    );
    const bookingMovies = await this.checkMoviesInSource(
      movie,
      this.bookingUseCase,
    );

    return { showtimeMovies, bookingMovies };
  }

  private async checkMoviesInSource(
    movie: Movie,
    sourceUseCase: any,
  ): Promise<boolean> {
    const sources = await sourceUseCase.findAll();

    return sources.some((source) => source.movies.includes(movie.id));
  }
}
