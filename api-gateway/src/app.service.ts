import { RequestCount } from './interfaces/requestCount';
import { FizzBuzzRequest } from './interfaces/fizzbuzz-request.interface';
import { Injectable } from '@nestjs/common';

{
}
@Injectable()
export class AppService {
  toFizzBuzz(req: FizzBuzzRequest): string {
    return 'should call FizzBuzz MS';
  }

  getFirstFizzbuzzRequest(): RequestCount[] {
    return [];
  }
}
