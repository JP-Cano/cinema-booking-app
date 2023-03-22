import { Module } from '@nestjs/common';
import { UserUseCase } from '../../../domain/usecases/users/UserUseCase';
import { UserController } from '../../../infrastructure/entry-points/reactive-web/controllers/users/UserController';

@Module({
  providers: [UserUseCase],
  controllers: [UserController],
  exports: [UserUseCase],
})
export class UserModule {}
