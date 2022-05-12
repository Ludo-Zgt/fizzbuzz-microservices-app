import { TcpClientOptions, Transport } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = +process.env.STATISTICS_PORT || 4002;
  const app = await NestFactory.createMicroservice<TcpClientOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        port: port,
        host: process.env.STATISTICS_HOST, // STATISTICS_HOST is set in the docker-compose
      },
    },
  );
  app.listen();
  console.log(`Microservice is listening...`);
}
bootstrap();
