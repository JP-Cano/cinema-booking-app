import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './application/modules/app.module';
import { UTIL } from './application/utils/enums/Util';

const PORT = process.env.PORT || UTIL.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () =>
    Logger.log(`Open server on http://localhost:${PORT}`),
  );
}

(async () => bootstrap())();
