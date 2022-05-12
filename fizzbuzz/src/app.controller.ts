import { FizzBuzzRequest } from './interfaces/fizzbuzz-request.interface';
import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('compute_fizzbuzz')
  toFizzBuzz(data: FizzBuzzRequest): string {
    return this.appService.toFizzBuzz(data);
  }
}
