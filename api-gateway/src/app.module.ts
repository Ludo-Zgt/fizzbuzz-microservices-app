import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'FIZZBUZZ',
        transport: Transport.TCP,
        options: {
          host: process.env.FIZZ_HOST,
          port: +process.env.FIZZ_PORT,
        },
      },
      {
        name: 'STATISTICS',
        transport: Transport.TCP,
        options: {
          host: process.env.STATISTICS_HOST,
          port: +process.env.STATISTICS_PORT,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
