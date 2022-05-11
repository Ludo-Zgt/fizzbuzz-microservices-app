import { RequestCount } from './interfaces/requestCount';
import { FizzBuzzRequestDto } from './dto/fizzbuzz-request.dto';
import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/fizzbuzz')
  computeFizzBuzz(@Body(ValidationPipe) dto: FizzBuzzRequestDto): string {
    return this.appService.toFizzBuzz(dto);
  }

  @Get('/statistics/fizzbuzz')
  getFirstFizzbuzzRequest(): RequestCount[] {
    return this.appService.getFirstFizzbuzzRequest();
  }
}
