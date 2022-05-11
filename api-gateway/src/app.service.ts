import { RequestCount } from './interfaces/requestCount';
import { FizzBuzzRequest } from './interfaces/fizzbuzz-request.interface';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

{
}
@Injectable()
export class AppService {
  constructor(@Inject('FIZZBUZZ') private readonly fizzbuzz: ClientProxy) {}

  toFizzBuzz(req: FizzBuzzRequest): Observable<string> {
    return this.fizzbuzz.send({ cmd: 'compute_fizzbuzz' }, req);
  }

  getFirstFizzbuzzRequest(): RequestCount[] {
    return [];
  }
}
