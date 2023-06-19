import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsInterceptor } from './cors.intercepter';
import { join } from 'path';
import compression from '@fastify/compress';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  await app.register(compression, { customTypes: /x-ndjson/ });
  app.useGlobalInterceptors(new CorsInterceptor());
  app.useStaticAssets({root: join(__dirname, '..', 'public')});
  await app.listen(3000, '0');
}
bootstrap();
