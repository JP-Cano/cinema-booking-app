import { forwardRef, Module } from '@nestjs/common';
import { UserUseCase } from '../../../domain/usecases/users/UserUseCase';
import { UserController } from '../../../infrastructure/entry-points/reactive-web/controllers/users/UserController';
import { BookingModule } from '../booking/booking.module';

@Module({
  imports: [forwardRef(() => BookingModule)],
  providers: [UserUseCase],
  controllers: [UserController],
  exports: [UserUseCase],
})
export class UserModule {}
