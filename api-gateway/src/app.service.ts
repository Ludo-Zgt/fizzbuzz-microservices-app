import { RequestCount } from './interfaces/requestCount';
import { FizzBuzzRequest } from './interfaces/fizzbuzz-request.interface';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

{
}
@Injectable()
export class AppService {
  constructor(
    @Inject('FIZZBUZZ') private readonly fizzbuzz: ClientProxy,
    @Inject('STATISTICS') private readonly statistics: ClientProxy,
  ) {}

  toFizzBuzz(req: FizzBuzzRequest): Observable<string> {
    this.statistics.emit('compute_fizzbuzz', req);
    return this.fizzbuzz.send('compute_fizzbuzz', req);
  }

  getFirstFizzbuzzRequest(): Observable<any> {
    return this.statistics.send('get_statistics', {});
  }
}
