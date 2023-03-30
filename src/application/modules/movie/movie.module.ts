import { Module } from '@nestjs/common';
import { MoviesUseCase } from '../../../domain/usecases/movies/MoviesUseCase';
import { MovieController } from '../../../infrastructure/entry-points/reactive-web/controllers/movies/MoviesController';

@Module({
  providers: [MoviesUseCase],
  controllers: [MovieController],
  exports: [MoviesUseCase],
})
export class MovieModule {}
