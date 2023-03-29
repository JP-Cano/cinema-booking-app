import { Module } from '@nestjs/common';
import { MoviesUseCase } from '../../../domain/usecases/movies/MoviesUseCase';

@Module({
  providers: [MoviesUseCase],
  controllers: [],
  exports: [MoviesUseCase],
})
export class MovieModule {}
