import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, TcpClientOptions } from '@nestjs/microservices';

async function bootstrap() {
  const port = +process.env.FIZZ_PORT || 4001;
  const app = await NestFactory.createMicroservice<TcpClientOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        port: port,
        host: process.env.FIZZ_HOST, // FIZZ_HOST is set in the docker-compose
      },
    },
  );
  app.listen();
  console.log(`Microservice is listening...`);
}
bootstrap();
