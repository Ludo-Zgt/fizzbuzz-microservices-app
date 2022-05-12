import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { FizzBuzzRequest } from './interfaces/fizzbuzz-request.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('get_statistics')
  getFirstFizzbuzzRequest(): any {
    return this.appService.geFirstFizzBuzzRequest();
  }

  @EventPattern('compute_fizzbuzz')
  handleFizzBuzzRequest(data: FizzBuzzRequest) {
    this.appService.handleFizzBuzzRequest(data);
  }
}
