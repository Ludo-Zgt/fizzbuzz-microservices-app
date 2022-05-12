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
          port: 4001,
        },
      },
      {
        name: 'STATISTICS',
        transport: Transport.TCP,
        options: {
          host: process.env.STATISTICS_HOST,
          port: 4002,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
