import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './application/modules/app.module';
import { UTIL } from './application/utils/enums/Util';
import { SwaggerModule } from '@nestjs/swagger';
import { OpenApi } from './application/config/swagger/OpenApi';

const PORT = process.env.PORT || UTIL.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const document = OpenApi.swaggerConfig(app);
  SwaggerModule.setup('/', app, document);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(PORT, () =>
    Logger.log(`Open server on http://localhost:${PORT}`),
  );
}

(async () => bootstrap())();
