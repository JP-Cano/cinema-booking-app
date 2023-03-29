import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { KEY } from '../../../domain/models/commons/enums/Key';
import { UserRepositoryAdapter } from '../../../infrastructure/driven-adapters/mongodb/adapters/UserRepositoryAdapter';
import { MovieSchema } from '../../../infrastructure/driven-adapters/mongodb/data/movies/MovieData';
import { UserSchema } from '../../../infrastructure/driven-adapters/mongodb/data/users/UserData';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.DB_URI),
    MongooseModule.forFeature([
      { name: KEY.USER, schema: UserSchema },
      { name: KEY.MOVIE, schema: MovieSchema },
    ]),
  ],
  providers: [
    { provide: KEY.DATABASE_REPOSITORY, useClass: UserRepositoryAdapter },
  ],
  exports: [KEY.DATABASE_REPOSITORY],
})
export class MongoDbModule {}
