import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from '../middlewares/logger/logger.middleware';
import { BookingModule } from './booking/booking.module';
import { HealthModule } from './health/health.module';
import { MongoDbModule } from './mongodb/mongo-db.module';
import { MovieModule } from './movie/movie.module';
import { ShowtimeModule } from './showtime/showtime.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    BookingModule,
    MovieModule,
    ShowtimeModule,
    MongoDbModule,
    HealthModule,
  ],
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
