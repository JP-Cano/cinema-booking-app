import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { UTIL } from './utils/enums/Util';

const PORT = process.env.PORT || UTIL.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      //whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(PORT, () =>
    Logger.log(`Open server on http://localhost:${PORT}`),
  );
}

(async () => bootstrap())();
