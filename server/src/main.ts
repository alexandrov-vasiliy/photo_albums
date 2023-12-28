import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { AllExceptionFilter } from 'src/filters/all-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.useGlobalFilters(new AllExceptionFilter());
  await app.listen(configService.get('port'), () =>
    console.log(`server started on port: ${configService.get('port')}`),
  );
}
bootstrap();
