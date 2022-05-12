import { Injectable } from '@nestjs/common';
import { InjectRedis } from '@liaoliaots/nestjs-redis';
import Redis from 'ioredis';
import { FizzBuzzRequest } from './interfaces/fizzbuzz-request.interface';

@Injectable()
export class AppService {
  constructor(@InjectRedis() private readonly redis: Redis) {}

  async handleFizzBuzzRequest(event: FizzBuzzRequest) {
    await this.redis.zincrby('fizzbuzz_request', 1, JSON.stringify(event)); // complexity O(log(N))
  }

  async geFirstFizzBuzzRequest() {
    const topRanked = await this.redis.zrevrange('fizzbuzz_request', 0, 0); //complexity O(log(N)+1)
    const request = topRanked[0];
    const count = await this.redis.zscore('fizzbuzz_request', request); //complexity O(1)
    return { count, request: JSON.parse(request) };
  }
}
