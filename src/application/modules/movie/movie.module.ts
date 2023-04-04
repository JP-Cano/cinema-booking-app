import { Module } from '@nestjs/common';
import { MoviesUseCase } from '../../../domain/usecases/movies/MoviesUseCase';
import { MovieController } from '../../../infrastructure/entry-points/reactive-web/controllers/movies/MoviesController';
import { BookingModule } from '../booking/booking.module';
import { ShowtimeModule } from '../showtime/showtime.module';

@Module({
  imports: [ShowtimeModule, BookingModule],
  providers: [MoviesUseCase],
  controllers: [MovieController],
  exports: [MoviesUseCase],
})
export class MovieModule {}
