import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export class OpenApi {
  public static swaggerConfig(app: INestApplication) {
    const config = new DocumentBuilder()
      .addBearerAuth()
      .setTitle('Cinema Booking Application')
      .setDescription('App for manage cinema bookings')
      .setVersion('1.0')
      .build();
    return SwaggerModule.createDocument(app, config);
  }
}
