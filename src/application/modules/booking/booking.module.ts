import { Module } from '@nestjs/common';
import { BookingUseCase } from '../../../domain/usecases/bookings/BookingUseCase';
import {
  BookingController
} from '../../../infrastructure/entry-points/reactive-web/controllers/bookings/BookingController';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  providers: [BookingUseCase],
  controllers: [BookingController],
  exports: [BookingUseCase],
})
export class BookingModule {}
