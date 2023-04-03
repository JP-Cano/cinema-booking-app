import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { KEY } from '../../../domain/models/commons/enums/Key';
import * as ADAPTER from '../../../infrastructure/driven-adapters/mongodb/adapters';
import * as DATA from '../../../infrastructure/driven-adapters/mongodb/data';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.DB_URI),
    MongooseModule.forFeature([
      { name: KEY.USER, schema: DATA.UserSchema },
      { name: KEY.MOVIE, schema: DATA.MovieSchema },
      { name: KEY.BOOKING, schema: DATA.BookingSchema },
      { name: KEY.SHOWTIME, schema: DATA.ShowtimeSchema },
    ]),
  ],
  providers: [
    { provide: KEY.USER_REPOSITORY, useClass: ADAPTER.UserRepositoryAdapter },
    { provide: KEY.MOVIE_REPOSITORY, useClass: ADAPTER.MovieRepositoryAdapter },
    {
      provide: KEY.BOOKING_REPOSITORY,
      useClass: ADAPTER.BookingRepositoryAdapter,
    },
    {
      provide: KEY.SHOWTIME_REPOSITORY,
      useClass: ADAPTER.ShowtimeRepositoryAdapter,
    },
  ],
  exports: [
    KEY.USER_REPOSITORY,
    KEY.MOVIE_REPOSITORY,
    KEY.SHOWTIME_REPOSITORY,
    KEY.BOOKING_REPOSITORY,
  ],
})
export class MongoDbModule {}
