import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BookingModule } from './booking/booking.module';
import { MovieModule } from './movie/movie.module';
import { ShowtimeModule } from './showtime/showtime.module';
import { MongoDbModule } from './mongo-db/mongo-db.module';

@Module({
  imports: [UserModule, BookingModule, MovieModule, ShowtimeModule, MongoDbModule],
  controllers: [],
  providers: [],
})
export class AppModule {
}
