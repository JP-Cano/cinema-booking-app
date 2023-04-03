import { Module } from '@nestjs/common';
import { ShowtimeUseCase } from '../../../domain/usecases/showtimes/ShowtimeUseCase';
import { ShowtimeController } from '../../../infrastructure/entry-points/reactive-web/controllers/showtimes/ShowtimeController';

@Module({
  providers: [ShowtimeUseCase],
  controllers: [ShowtimeController],
  exports: [ShowtimeUseCase],
})
export class ShowtimeModule {}
